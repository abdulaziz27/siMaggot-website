import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import DataImport from "./DataImport.js";
import userRoutes from "./routes/UserRoutes.js";
import productRoutes from "./routes/ProductRoutes.js";
import { errorHandler, notFound } from "./middleware/error.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// API
app.use("/api/import", DataImport);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`server run in PORT ${PORT}`));