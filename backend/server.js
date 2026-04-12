import express from "express"
import mongoose from "mongoose";
import "dotenv/config"
import fileUpload from "express-fileupload";
import userRouter from "./router/user_router.js";
import { v2 as cloudinary } from 'cloudinary';
import blogrouter from "./router/blog_router.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import contactrouter from "./router/contact_router.js";
const app=express();
app.use(express.json());
app.use(express.urlencoded())
app.use(cookieParser())
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONT_END
];

app.use(cors({
  origin: function(origin, callback){
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS blocked"));
    }
  },
  credentials: true
}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}))



cloudinary.config({ 
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret:process.env.API_SECRET
});
const MONGO_URI=process.env.MONGO_URI;
try{
    mongoose.connect(MONGO_URI);
    console.log("Connect Sucessfully");
}
catch(error){
    console.log("Error Is : ",error);
}
app.use("/api/blog",blogrouter);
app.use("/api/user",userRouter);
app.use("/api/cont",contactrouter)

const port=process.env.PORT || 3433;
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})