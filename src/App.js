import express from 'express'
const app = express()
import authRoutes from './routers/auth.routes.js'
import cookieParser from 'cookie-parser'


 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

// post/api/auth/register
 app.use('/api/auth',authRoutes)
 


export default app


