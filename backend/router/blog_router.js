import express from "express"

import { createBlog, createbyme, deleteblog, getallblog, getsingleblog, updateblog } from "../controller/blog_controller.js";
import { isAdmin, isAuthenticate } from "../middleware/authuser.js";

const blogrouter=express.Router();

blogrouter.post("/create",isAuthenticate,isAdmin("admin"),createBlog);
blogrouter.delete("/delete/:id",isAuthenticate,isAdmin("admin"),deleteblog);
blogrouter.get("/getallblog",getallblog);
blogrouter.get("/getsingleblog/:id",isAuthenticate,getsingleblog);
blogrouter.get("/myblog",isAuthenticate,isAdmin("admin"),createbyme);
blogrouter.put("/updateblog/:id",isAuthenticate,isAdmin("admin"),updateblog);
export default blogrouter;
