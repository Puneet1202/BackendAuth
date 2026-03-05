import express from 'express'
import  {registerUser} from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/register',registerUser )
router.get('/test',(req,res)=>{
    console.log("cookie",req.cookies)
    res.json({
        message:'test',
        cookie:req.cookies
    })
})


export default router
