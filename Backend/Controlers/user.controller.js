const Router = require("express")
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const UserModel = require("../Modals/user.model");
require("dotenv").config();
const user = Router();



user.post("/signup",async(req,res)=>{
    const {email,name,password} = req.body;
    const user = await UserModel.findOne({email})
    
    if(user) return res.send({message : "Account with this Email id already exists."})
    if(!email) return res.send({message : "please enter EmailId."})
    if(!email.includes("@gmail.com")) return res.send({message:"Please enter correct emailId."})
    
    // Reviewed for: fw17_0415 and fw16_016 - use async/await only to make things uniform across the code
    // use await at user.save()
    // Never send what is incorrect with the username or password, Also, how can password be wrong on singup page?
    // You are just siging a JWT token and if there is issue that is not because of wrong password
    bcrypt.hash(password,10, function(err, hash) {
        if(err) return res.send({message:"Unable to account create"})
        const user = new UserModel ({
            email,name,
            password:hash
        })
        user.save();
        jwt.sign({email,userId:user._id}, process.env.secretKey, function(err, token) {
            if(err) return res.send({message : "wrong password."})
            return res.send({message:"Account created successfully.",token:token,userId:user._id,email})
        });
       
    });
})

// Reviewed for: fw17_0415 and fw16_016 - use auth middleware to check if user is authenticated and send to next middleware

user.post("/signin",async(req,res)=>{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email})

    if(!user) return res.send({message : "Please Signup first."})
    bcrypt.compare(password,user.password, function(err, result) {
        if(!result) return res.send({message:"Wrong credential"})
        if(result){
            jwt.sign({email,userId:user._id}, process.env.secretKey,{expiresIn:"1d"}, function(err, token) {
                if(err) return res.send({message : "wrong password."})
                return res.send({message : "Signed in Successfully.",token:token,userId:user._id,email})
            });
        }
    });
})

module.exports = user
