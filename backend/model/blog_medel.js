import mongoose from "mongoose";

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    blogImage:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    cat:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true,
        minlength:[20,"Should contatin almonst 200 characters"]
    },
    adminName:{
        type:String,
    },
    adminPhoto:{
        type:String,
    },
    createby:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
    }
})

export const Blog=mongoose.model("Blog",blogSchema);