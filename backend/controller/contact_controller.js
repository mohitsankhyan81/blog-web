import { Cont } from "../model/contact_model.js";

export const contactcontroller=async(req,res)=>{
    try{
        const {name,email,message}=req.body;
        if(!name || !email || !message){
            return res.status(400).json({message:"All fields are required"});
        }

        const newdata=new Cont({name,email,conmessage:message});
        await newdata.save();

        if(newdata){
            return res.status(200).json({message:"Contact from Sumitted",newdata:newdata});
        }
    }
    catch(error){
        console.log("error in the contact router"+error);
        return res.status(500).json({message:"Error in thw contact router"});
    }
}