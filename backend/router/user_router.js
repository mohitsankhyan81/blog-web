import express from "express"
import { login, logout, register } from "../controller/user_controller.js";
import { isAuthenticate } from "../middleware/authuser.js";

const userRouter=express.Router();

userRouter.post("/register",register);
userRouter.post("/login",login);
userRouter.get("/logout",isAuthenticate,logout);
export default userRouter;