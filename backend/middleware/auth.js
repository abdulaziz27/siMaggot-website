import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/UserModels.js";


import cors from 'cors';
import express from 'express';

const app = express();
const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  };
  
  app.use(cors(corsOptions));
  
const protect = asyncHandler(
    async(req,res,next) => {
        let token 
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")){
            try{
                token = req.headers.authorization.split(" ")[1]
                const decoded = jwt.verify(token,process.env.JWT_SECRETE);
                req.user = await User.findById(decoded.id).select("-password");
                next();
            } catch(error){
                console.error(error);
                res.status(401);
                throw new Error ("token failed");
            }
        } if (!token) {
            res.status(401)
            throw new Error("no token");
        }
    }
)

export default protect;