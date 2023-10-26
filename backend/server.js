import products from "./data/products.js";
import express from "express";


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

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
});