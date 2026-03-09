import mongoose from "mongoose";
import validator from "validator"
const userSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String,
    },
    email:{
        required:true,
        type:String,
        unique:true,
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    phone:{
        required:true,
        type:String
    },
    education:{
        required:true,
        type:String
    },
    role:{
        required:true,
        type:String,
        enum:["user","admin"]
    },
    // photo:{
    //     required:true,
    //     type:String
    // },
    password:{
        required:true,
        type:String,
        select:false,
        minlength:8
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export const User=mongoose.model("User",userSchema);