import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/UserModels.js";
import generateToken from "../utils/token.js";
import protect from "../middleware/auth.js";

const userRoutes = express.Router();

//login

userRoutes.post("/login", asyncHandler(
    async(req,res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

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
));

// register

userRoutes.post(
    "/", asyncHandler (async(req,res) => {
        const {name, email, password} = req.body;
        const userExists = await User.findOne({email});

        if (userExists){
            res.status(400);
            throw new Error ("User Already Exist");
        }

        const user = await User.create({
            name, email, password
        })

        if (user){
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isSeller: user.isSeller,
                token: generateToken(user._id),
            })
        }
        else {
            req.status(400);
            throw new Error ("Invalid User Data");
        }
    })
)


//profile

userRoutes.get(
    "/profile",protect, asyncHandler (async(req,res) => {
        const user = await User.findById(req.user._id)
        if(user){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isSeller: user.isSeller,
                createdAt: user.createdAt,
            }) 
        } else {
            res.status(404);
            throw new Error("User Not Found"); 
        }
    })
)




export default userRoutes;