import jwt from "jsonwebtoken"
import { User } from "../model/user_model.js"

export const createjsonWebToken=async(userid,res)=>{
    const token=jwt.sign({userid},process.env.JWT_SECRET,{
        expiresIn:"7d"
    })

    res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "None"
    });

    await User.findByIdAndUpdate(userid,{token});
    return token
}
