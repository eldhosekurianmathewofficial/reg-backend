const express=require("express")
const router=express.Router()
const regsignupmodal = require("../Models/regsignup")
const bcrypt=require("bcryptjs")

HashGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    //
//     HashGenerator(password).then(
//         (hashedPassword)=>{
// data.password=hashedPassword
// console.log(data)
//     let load = new regsignupmodal(data)
//     let result= load.save()
//     res.json(
//         {
//         status:"success"
//     })
//         }
//     )    

//
//or
const hashedPassword=await HashGenerator(password)
data.password=hashedPassword
let load = new regsignupmodal(data)
let result= load.save()
    res.json(
        {
        status:"success"
    })
})


router.post("/login",async(req,res)=>{
    let email=req.body.email
    let password=req.body.password
    
}
    
)

module.exports=router