import { User } from "../model/user_model.js";
import bcrypt from "bcrypt"
import { v2 as cloudinary } from 'cloudinary';

export const register=async(req,res)=>{
    if(!req.files || !req.files.photo){
        return res.status(400).json({message:"user photo is required"});
    }

    const {photo}=req.files;

    const allowedformat=["image/png","image/jpg","image/jpeg"];

    if(!allowedformat.includes(photo.mimetype)){
        return res.status(400).json({message:"invalid photo type only png jpg jpeg format is followed"})
    }
    const {name,phone,email,education,role,password}=req.body;

    if(!name || !phone || !email || !education|| !role|| !password){
        return res.status(400).json({messege:"All fields are required"});
    }

    const user=await User.findOne({email});
    if(user){
        return res.status(400).json({message:"user already exist with the email"});
    }
    const hashpassword= await bcrypt.hash(password,10);

    const cloudinaryResponse=await cloudinary.uploader.upload(
        photo.tempFilePath
    )

    if(!cloudinaryResponse || cloudinaryResponse.error){
        console.log("This is the cloudinary ERORR",cloudinaryResponse.error)
    }
    const newUser=new User({email,name,password:hashpassword,phone,role,education,photo:{
        public_id:cloudinaryResponse.public_id,
        url:cloudinaryResponse.url
    }});
    await newUser.save();


    if(newUser){
        res.status(201).json({message:"user register sucessfully",newUser:newUser});
    }
}