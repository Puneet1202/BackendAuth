import app from './src/App.js'
import connectDB from './src/db/db.js'
const PORT = process.env.PORT || 3000;
const startServer = async()=>{
    try{
        await connectDB();
        app.listen( PORT,()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    }
    catch(error){
        console.log("Error in starting server",error)
    }
}

startServer()

