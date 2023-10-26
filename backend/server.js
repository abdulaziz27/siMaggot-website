import products from "./data/products.js";
import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";

dotenv.config();
connectDatabase();
const app = express();

//load product from server
app.get("/api/products", (req, res) => {
    res.json(products);
});
//load single product from server
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.get("/", (req, res) => {
    res.send("API is running");
});

const PORT = process.env.PORT;

app.listen(PORT, console.log(`server run in PORT ${PORT}`));