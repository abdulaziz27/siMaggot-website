import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import DataImport from "./DataImport.js";
import userRoutes from "./routes/UserRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// API
app.use("/api/import", DataImport);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("API is running");
});

const PORT = process.env.PORT;

app.listen(PORT, console.log(`server run in PORT ${PORT}`));