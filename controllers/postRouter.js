const express=require("express")
const cors=require("cors")
const router=express.Router()
const postModel=require("../Models/regpostmodel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let post=new postModel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })

})
router.get("/viewall",async(req,res)=>{
    let data=await postModel.find()
    .populate("userId","name age -_id")
    .exec()
    res.json(data)
})
module.exports=router