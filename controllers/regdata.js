const express=require("express")
const router=express.Router()
const regsignupmodal = require("../Models/regsignup")

router.post("/signup",async(req,res)=>{
    let data=req.body
    let load = new regsignupmodal(data)
    let result= await load.save()
    res.json({
        status:"success"
    })
})

module.exports=router