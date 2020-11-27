import React from "react";
import "./App.css";
import Header from "./shared/Header";
import Home from "./Home/Home";
import Footer from "./shared/Footer/Footer";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import Payment from "./Payment/Payment";
import Orders from "./Orders/Orders";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    "pk_test_51HpYbhGFPb0CAvBnlyVEByNKqtUiRbIDWlMwGd1jA4eOBlld1Ss1XVwrVgKDq8g0UR4Utik0TlCbfkKmc7I0lcJr003Gm5V9P4"
);

function App() {
    const [{ basket, user }, dispatch] = useStateValue();

    document.title = "Amazon Clone";

    useEffect(() => {
        // Only run once the app component mount and unmount
        auth.onAuthStateChanged((authUser) => {
            // the user just logged in / the user was logged in
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                // the user logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return (
        <Router>
            <div className="app">
                {/* Back to top place */}
                <a id="nav-top"></a>

                <Switch>
                    <Route
                        path="/orders"
                        render={() => {
                            if (user === null) {
                                return <Redirect to="/login" />;
                            } else {
                                return (
                                    <>
                                        <Header />
                                        <Orders />
                                        <Footer />
                                    </>
                                );
                            }
                        }}
                    />
                    <Route
                        path="/login"
                        render={() => {
                            if (user === null) {
                                return <Login />;
                            } else {
                                return <Redirect to="/" />;
                            }
                        }}
                    />
                    <Route
                        path="/checkout"
                        render={() => {
                            if (user === null) {
                                return <Redirect to="/login" />;
                            } else {
                                return (
                                    <>
                                        <Header />
                                        <Checkout />
                                        <Footer />
                                    </>
                                );
                            }
                        }}
                    />
                    <Route
                        path="/payment"
                        render={() => {
                            if (user === null) {
                                return <Redirect to="/login" />;
                            } else {
                                return (
                                    <>
                                        <Header />
                                        <Elements stripe={stripePromise}>
                                            <Payment />
                                        </Elements>
                                        <Footer />
                                    </>
                                );
                            }
                        }}
                    />

                    <Route path="/">
                        <Header />
                        <Home />
                        <Footer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
