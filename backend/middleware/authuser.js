import jwt from "jsonwebtoken"
import { User } from "../model/user_model.js";

//authentication
export const isAuthenticate=async(req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        if(!token){
            return res.status(400).json({message:"user not verified"});
        }

        const decode=jwt.verify(token,process.env.JWT_SECRET);
        const user=await User.findById(decode.userid);
        if(!user){
            return res.status(400).json({error:"user not found"});
        }
        req.user=user;
        next();
    }
    catch(error){
        console.log("Enter in the authentication ",error);
        return res.status(400).json({error:"You are not authenticated"});
    }
}


//authorization

export const isAdmin=(...roles)=>{
    return(req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(400).json({message:"User with the given role is not allowed"});
        }
        next();
    }
}