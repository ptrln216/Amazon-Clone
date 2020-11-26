const cors = require("cors");
const { request } = require("express");
const express = require("express");
const stripe = require("stripe")(
    "sk_test_51HpYbhGFPb0CAvBnoQU0sBYjDNEEBApoMpsVqL03IXiI5vFtcdMFTEGWpq7quJKNh2SZLTX50DyMLY0KQ59CFqzk00MNHFosXX"
);

// API

// - APP Config
const app = express();

// - Listen Command
const port = process.env.PORT || 5001; // dev=5001  production=process.env.PORT
app.listen(port, () => console.log(`Server started on port: ${port}`));

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
// app.get("/", (request, response) => response.status(200).send("Hello World!"));

app.post("/api/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received!!! for this amount", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
        payment_method_types: ["card"],
    });

    // 201 - OK, Created
    response.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// Handle Production
if (process.env.NODE_ENV === "production") {
    // Set Static Folder
    app.use(express.static(__dirname + "/public/"));

    // Handle SPA
    app.get(/.*/, (request, response) =>
        response.sendFile(__dirname + "/public/index.html")
    );
}
