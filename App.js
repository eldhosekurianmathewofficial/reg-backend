const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const data=require("./controllers/regdata")

const exp=express()
exp.use(express.json())
exp.use(cors())
mongoose.connect("mongodb+srv://eldhosekurianofficial:Jesusislove123@cluster0.ufrxpj4.mongodb.net/signupDB?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
exp.use("/api/registeration",data)
exp.listen(3001,()=>{
    console.log("Status Running")
})