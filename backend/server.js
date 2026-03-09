import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./router/user_router.js";
const app=express();
dotenv.config();
app.use(express.json());
try{
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connect Sucessfully");
}
catch(error){
    console.log("Error Is : ",error);
}

app.use("/api/user",userRouter);

const port=process.env.PORT || 3433;
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})