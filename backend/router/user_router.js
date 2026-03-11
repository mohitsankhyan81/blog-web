import express from "express"
import { adminprofile, login, logout, myprofile, register } from "../controller/user_controller.js";
import { isAuthenticate } from "../middleware/authuser.js";

const userRouter=express.Router();

userRouter.post("/register",register);
userRouter.post("/login",login);
userRouter.get("/logout",isAuthenticate,logout);
userRouter.get("/myprofile",isAuthenticate,myprofile)
userRouter.get("/admins",isAuthenticate,adminprofile);
export default userRouter;