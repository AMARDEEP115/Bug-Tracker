const {Router}=require("express");
const userModle=require("../Model/userModle");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();

const userRouter=Router();

userRouter.post("/register",async(req,res)=>{
    try{
        let data=req.body;
        let user=await userModle.find({email:data.email});
        if(user.length===0){
            let round=Number(process.env.saltRounds);
            let pass=bcrypt.hash(data.password, round, async function(err, hash) {
                if(err){
                    console.log(err);
                    res.send({"message":"something went wrong"});
                }
                let obj={
                    email:data.email,
                    password:hash,
                }
                let sav=new userModle(obj);
                await sav.save();
                res.send({"message":"Registered Succesfully"});
            });
        } else {
            res.send({"message":"already registered"});
        }
    } catch(err){
        console.log(err);
        res.send({"message":"unable to register"});
    }
});

userRouter.post("/login",async(req,res)=>{
    try{
        let data=req.body;
        let user=await userModle.find({email:data.email});
        if(user.length>0){
            let hash=user[0].password;
            let pass=bcrypt.compare(data.password, hash).then(function(result) {
                if(result){
                    let key=process.env.privateKey;
                    const token = jwt.sign({email:data.email},key);
                    res.send({"message":"Login Succesfull",token:token});
                } else {
                    res.send({"message":"Wrong Password"});
                }
            });
        } else {
            res.send({"message":"user not found"});
        }
    } catch(err){
        console.log(err);
        res.send({"message":"unable to login"});
    }
});

module.exports=userRouter;