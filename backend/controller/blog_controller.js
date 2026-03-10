import {v2 as cloudinary} from "cloudinary"
import { Blog } from "../model/blog_medel.js";
import { createjsonWebToken } from "../auth/authtoken.js";

export const createBlog = async (req,res)=>{
    try{

        if(!req.files || !req.files.blogImage){
            return res.status(400).json({message:"blog photo is required"});
        }

        const { blogImage } = req.files;
        console.log(blogImage)
        const { title, about, cat } = req.body;
        console.log(title,about,cat);
        if(!title || !about || !cat){
            return res.status(400).json({message:"All fields are required"});
        }

        const allowedformat = ["image/png","image/jpg","image/jpeg"];

        if(!allowedformat.includes(blogImage.mimetype)){
            return res.status(400).json({message:"File format is not acceptable"});
        }

        const cloudinaryResponse = await cloudinary.uploader.upload(
            blogImage.tempFilePath
        );
        const adminName=req?.user?.name;
        const adminPhoto=req?.user?.photo;
        const createby=req?.user?._id;
        const blogsave = await Blog.create({
            title,
            about,
            cat,
            adminName,
            adminPhoto,
            blogImage:{
                public_id: cloudinaryResponse.public_id,
                url: cloudinaryResponse.url
            },
            createby
        });

        res.status(200).json({
            message:"blog created successfully",
            blogsave
        });

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}