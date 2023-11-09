import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import DataImport from "./DataImport.js";
import userRoutes from "./routes/UserRoutes.js";
import products from "./data/products.js";
import productRoutes from "./routes/ProductRoutes.js";
import { errorHandler, notFound } from "./middleware/error.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// API
app.use("/api/import", DataImport);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

// products
app.get("/api/products", (req, res) => {
    res.json(products);
});
// product
app.get("/api/product", (req, res) => {
    const product = products.find((p) => p._id === match.params.id);
    res.json(product);
});
app.get("/", (req, res) => {
    res.send("API is running");
});

const PORT = process.env.PORT;

app.listen(PORT, console.log(`server run in PORT ${PORT}`));