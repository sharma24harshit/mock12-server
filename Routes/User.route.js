const express = require("express");
const UserRouter = express.Router()
const {UserModel} = require("../Models/User.Model");

UserRouter.get("/",async(req,res)=>{
    try {
       const data = await UserModel.find();
       res.send(data)
    } catch (error) {
        res.send({"msg":error})
    }
})

UserRouter.get("/getProfile/:id",async(req,res)=>{
    const ID = req.params.id;
    try {
       const data = await UserModel.find({_id:ID});
       res.send(data)
    } catch (error) {
        res.send({"msg":error})
    }
})

UserRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try {
       const user = await UserModel.find({email});
       if(user.length>0){
       if(user[0].password==password){
        res.send({msg:"Logged In",id:user[0]._id})
       }
       else{
        res.send("Invalid Password")
       }
       }
       else{
        res.send("Invalid Credentials")
       }
    } catch (error) {
        res.send({"msg":error})
    }
})

UserRouter.post("/register",async(req,res)=>{
    const payload = req.body;
    try {
       const user = new UserModel(payload);
       await user.save()
       res.send("User Registered Successfully")
    } catch (error) {
        res.send({"msg":error})
    }
})


module.exports = {UserRouter}