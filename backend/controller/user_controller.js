import { User } from "../model/user_model.js";
import bcrypt from "bcrypt"
import { v2 as cloudinary } from 'cloudinary';
import { createjsonWebToken } from "../auth/authtoken.js";

export const register=async(req,res)=>{
    try{
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
        const token= await createjsonWebToken(newUser._id,res)
        res.status(201).json({message:"user register sucessfully",newUser:newUser});
    }
}
catch(error){
    console.log("error in the register fucntion " , error);
}
}

export const login = async (req, res) => {

    const { email, role, password } = req.body;

    try {

        if (!email || !role || !password) {
            return res.status(400).json({ message: "Fill all fields" });
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Password incorrect" });
        }

        if (user.role !== role) {
            return res.status(400).json({ message: "Role incorrect" });
        }

        const token = await createjsonWebToken(user._id, res);

        res.status(200).json({
            message: "Login successful",
            user,
            token
        });

    } catch (error) {
        console.log("Error in the login ", error);
    }
}

export const logout=(req,res)=>{
    try{
    res.clearCookie("jwt",{httpOnly:true});
    return res.status(200).json({message:"Logout sucessfully"});
    }
    catch(error){
        console.log("There is internal server error");
        return res.status(500).json({message:"This is the internal server error"});
    }
}

export const myprofile=async(req,res)=>{
    try{
         const user=await req.user;
        return res.status(200).json(user);
    }
    catch(error){
        console.log("eror in the myprofile function",error);
        return res.status(400).json({message:"error in the my profile function"});
    }
}

export const adminprofile=async(req,res)=>{
    try{
        const admins=await User.find({role:"admin"});
        return res.status(200).json(admins);
    }
    catch(error){
        console.log("error in the adminprofile ",error);
        return res.status(400).json({message:"error in the admin profile fuction"});
    }
}