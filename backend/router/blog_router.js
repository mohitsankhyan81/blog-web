import express from "express"

import { createBlog } from "../controller/blog_controller.js";
import { isAdmin, isAuthenticate } from "../middleware/authuser.js";

const blogrouter=express.Router();

blogrouter.post("/create",isAuthenticate,isAdmin("admin"),createBlog);

export default blogrouter;
