import {v2 as cloudinary} from "cloudinary"
import { Blog } from "../model/blog_medel.js";
import mongoose from "mongoose";
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

export const deleteblog=async(req,res)=>{
    try{
    const {id}=req.params;
    const blog=await Blog.findById(id);
    if(!blog){
        return res.status(400).json({message:"Blog not found"})
    }
    await Blog.findByIdAndDelete()
    res.status(200).json({message:"Blog delete sucessfully"});
}
    catch(error){
        console.log("Errror in the delete blog ", error);
        return res.status(400).json({message:"error in the delete blog"});
    }
}

export const getallblog=async(req,res)=>{
    try{
    const allblog=await Blog.find();
    return res.status(200).json(allblog);
    }
    catch(error){
        console.log("error inthe getallblogs");
        return res.status(400).json({message:"error when you get all blogs"});
    }

}

export const getsingleblog=async(req,res)=>{
    try{
    const {id}=req.params;
    const blog=await Blog.findById(id);
    if(!blog){
        return res.status(400).json({message:"Blog is not found"});
    }
    res.status(200).json(blog)
    }
    catch(error){
        console.log("error in the getsingleblog ",error);
        return res.status(400).json({message:"error in the getsingleblog"})
    }
}

export const createbyme=async(req,res)=>{
    try{
    const userid=req.user._id;
    const myblog=await Blog.find({createby:userid});
    return res.status(200).json(myblog);
    }
    catch(error){
        console.log("error when we get blog that is created by me",error);
        return res.status(400).json({message:"error when we get blog that is created by me"});
    }
}


export const updateblog=async(req,res)=>{
    try{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid blog id" });
    }
    const updateblog=await Blog.findByIdAndUpdate(id,req.body,{new:true});
    if(!updateblog){
        return res.status(400).json({message:"Blog not found"});
    }
    return res.status(200).json(updateblog);
    }
    catch(error){
        console.log("error when update blog ", error );
        return res.status(400).json({message:"Error when we update the blog"});
    }   
}