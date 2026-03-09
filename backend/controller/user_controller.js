import { User } from "../model/user_model.js";
import bcrypt from "bcrypt"
export const register=async(req,res)=>{
    const {name,phone,email,education,role,password}=req.body;

    if(!name || !phone || !email || !education|| !role|| !password){
        return res.status(400).json({messege:"All fields are required"});
    }

    const user=await User.findOne({email});
    if(user){
        return res.status(400).json({messege:"user already exist with the email"});
    }
    const hashpassword= await bcrypt.hash(password,10);
    const newUser=new User({email,name,password:hashpassword,phone,role,education});
    await newUser.save();


    if(newUser){
        res.status(201).json({messege:"user register sucessfully"});
    }
}