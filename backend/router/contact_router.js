import express from "express"
import { contactcontroller } from "../controller/contact_controller.js";
import { isAuthenticate } from "../middleware/authuser.js";

const contactrouter=express.Router();

contactrouter.post("/contact",isAuthenticate,contactcontroller);

export default contactrouter