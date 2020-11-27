import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Payment.css";
import CheckoutProduct from "../shared/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { db } from "../firebase";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe(); // the API to use Strip Service
    const elements = useElements(); // use to find our CardElement

    // everytime shopping cart changes, the client_secret updates
    // client_secret is a neccessity to charge costomer
    useEffect(() => {
        if (basket.length === 0) {
            history.replace("/");
        }

        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                // Stripe expects the total in a currencies' subunits
                // For 1 dollar, there's 100 cents
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });

            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    console.log("THE SECRET IS >>> ", clientSecret);

    const handleSubmit = async (event) => {
        // Block native form submission
        event.preventDefault();
        setProcessing(true);

        // Get a reference to a mounted CardElement. Elements knows how to find your CardElement because there can only ever be one of each type of element.
        const cardElement = elements.getElement(CardElement);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: { card: cardElement },
            })
            .then(({ paymentIntent }) => {
                // Push order data into cloud database
                db.collection("users")
                    .doc(user?.uid)
                    .collection("orders")
                    .doc(paymentIntent.id)
                    .set({
                        basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created,
                    });

                // confirm successfully
                setProcessing(false);
                setError(null);
                setSucceeded(true);

                dispatch({ type: "EMPTY_BASKET" });

                history.replace("/orders");
            });
    };

    const handleChange = (event) => {
        // Listens for changes in the CardElement
        // and display any errors as the costomer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>

                {/* Payment Section - Payment Address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angelas, CA</p>
                    </div>
                </div>

                {/* Payment Section - Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket?.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment Section - Payment Method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        {/* Stripe Service - Card Component */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            {/* Errors */}
                            {error && (
                                <div className="payment__details__cardError">
                                    {error}
                                </div>
                            )}

                            <div className="payment__details__tips">
                                <p>
                                    Finish payment using test account. Type 42
                                    until the form is filled.
                                </p>
                                <p>可以使用測試卡號完成支付，循環輸入42即可</p>
                            </div>

                            <div className="payment__details__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"$"}
                                />
                                <button
                                    type="submit"
                                    disabled={
                                        processing || succeeded || disabled
                                    }
                                >
                                    {processing ? "Processing" : "Buy Now"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
