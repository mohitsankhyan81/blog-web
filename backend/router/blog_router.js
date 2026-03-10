import express from "express"

import { createBlog } from "../controller/blog_controller.js";

const blogrouter=express.Router();

blogrouter.post("/create",createBlog);

export default blogrouter;
