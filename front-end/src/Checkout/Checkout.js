import React from "react";
import "./Checkout.css";
import Subtotal from "./component/Subtotal";
import CheckoutProduct from "../shared/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                    className="checkout__ad"
                />
                <div className="checkout__basket">
                    <h2 className="checkout__title">
                        {basket.length
                            ? "Your Shopping Basket"
                            : "Your Shopping Cart is Empty"}
                    </h2>
                    {basket.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                    {/* Show Advice if the cart is empty */}
                    {!basket.length && (
                        <div className="checkout__adviceContainer">
                            <p className="checkout__advice">
                                Keep shopping on{" "}
                                <Link to="/">Amazon Clone Homepage</Link>
                            </p>
                            <p className="checkout__advice">
                                Add what you like to the cart ^_^
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {basket.length === 0 ? (
                <div></div>
            ) : (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;
