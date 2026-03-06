import express, { json } from 'express'

const router = express.Router()
import jwt from 'jsonwebtoken'
import userModel from '../models/user.model.js'
import cookieParser from 'cookie-parser'

router.post('/create', async(req,res)=>{
    console.log("api hit horhi hai")
    try{
        const token = req.cookies.token;
        if(!token){
            return  res.status(401).json({
                status:401,
                message:"token not found"
                })
        }
         const decoded = jwt.verify(token,process.env.JWT_SECRET)
         console.log(decoded)
         const user = await userModel.findOne({
            _id:decoded.id

         })
         console.log(user)
         if(!user){
            return res.status(404).json({
                message:"user not found"
            })
         }


        return res.status(200).json({
            message: "Bhai, token mil gaya hai! Ab aage ka kaam karo."
        });

    }catch(error){
        console.log(error)
        res.status(500).json({
            status:500,
            message:"Internal server error"
        })
    }
}) 

export default router
