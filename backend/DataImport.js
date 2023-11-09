import express from "express";
import User from "./models/UserModels.js";
import users from "./data/users.js";
import Product from "./models/ProductModels.js";
import products from "./data/products.js";
import asyncHandler from "express-async-handler"
import Category from "./models/CategoryModels.js";
import category from "./data/category.js";

const DataImport = express.Router();

DataImport.post("/user", asyncHandler(
    async (req,res)=>{
        await User.deleteOne({});
        const importUser = await User.insertMany(users);
        res.send({importUser});
})
);

DataImport.post("/products", asyncHandler(
    async (req,res)=>{
        await Product.deleteOne({});
        const importProducts = await Product.insertMany(products);
        res.send({importProducts});
})
);

DataImport.post("/category", asyncHandler(
    async (req,res)=>{
        await Category.deleteOne({});
        const importCategory = await Category.insertMany(category);
        res.send({importCategory});
})
);

export default DataImport;