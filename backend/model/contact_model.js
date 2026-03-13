import mongoose from "mongoose";
import validator from "validator"

const contactSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    conmessage:{
        type:String,
        minlength:[20,"MinLength is 20"]
    }
})

export const Cont=mongoose.model("Cont",contactSchema);