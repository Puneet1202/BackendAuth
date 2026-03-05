
import mongoose from 'mongoose'
 
const connectDB = async()=>{
    try {
        console.log("Connection ki koshish shuru...");
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB