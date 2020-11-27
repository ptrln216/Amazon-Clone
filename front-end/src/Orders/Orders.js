import React, { useState, useEffect } from "react";
import "./Orders.css";
import Order from "./component/Order";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db.collection("users")
                .doc(user?.uid)
                .collection("orders")
                .orderBy("created", "desc")
                .onSnapshot((snapshot) =>
                    setOrders(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        }))
                    )
                );
        } else {
            setOrders([]);
        }
    }, [user]);

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            {orders ? (
                <div className="orders__order">
                    {orders?.map((order) => (
                        <Order order={order} />
                    ))}
                </div>
            ) : (
                <h2>There's no order yet.</h2>
            )}
        </div>
    );
}

export default Orders;
