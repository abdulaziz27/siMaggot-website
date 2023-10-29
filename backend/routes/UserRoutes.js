import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/UserModels.js";
import generateToken from "../utils/token.js";

const userRoutes = express.Router();

userRoutes.post("/login", asyncHandler(
    async(req,res) => {
        const {email,password} = req.body;
        const user = await User.findOne({email});

        if (user && (await user.matchPassword(password))){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isSeller: user.isSeller,
                token: generateToken(user._id),
                createdAt: user.createdAt,
            })
        } else{
            res.status(401);
            throw new Error("Invalid email or password"); 
        }
    }
))

export default userRoutes;