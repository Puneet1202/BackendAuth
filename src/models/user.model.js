 import mongoose from "mongoose";

 const userschema = new mongoose.Schema({
     username : String,
     email : {
        type:String,
        required:true,
        unique:true
     },
     password : {
        type:String,
        required:true  
     },
     
 })

  const User = mongoose.model("User",userschema)

  export default User