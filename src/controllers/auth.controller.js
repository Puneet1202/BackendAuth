import userModel from '../models/user.model.js'
import jwt from 'jsonwebtoken'

export async function registerUser(req,res){
    try {
        const {username,email,password} = req.body
        console.log(username,email,password)

        const user = await  userModel.create({
            username,
            email,
            password
        })
        if(!user){
            return res.status(400).json({message:'User not created'})
        }
        const token = jwt.sign({ 
            id:user._id         
        },process.env.JWT_SECRET,)
        res.cookie("token",token)
        return res.status(200).json({message:'User created successfully',user})
     
    } catch (error) {         
        console.log(error)
        res.status(500).json({ message: "Server mein kuch phat gaya!", error: error.message });
    }
}




 




