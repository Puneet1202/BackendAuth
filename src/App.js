import express from 'express'
const app = express()
import authRoutes from './routers/auth.routes.js'


 app.use(express.json())
 app.use(express.urlencoded({extended:true}))

// post/api/auth/register
 app.use('/api/auth',authRoutes)


export default app