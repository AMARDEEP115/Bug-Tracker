const express=require("express");
const cors=require("cors");
require("dotenv").config();
const app=express();

const {connection}=require("./Config/db");
const userRouter = require("./Router/userRouter");


app.use(express.json());
app.use(cors({
    origin:"*"
}));

app.get("/",(req,res)=>{
    res.send("Home Route");
});

app.use("/user",userRouter);

app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("Connected to DB");
    } catch(err){
        console.log(err);
        console.log("Not-Connected to DB");
    }
    console.log(`server is running at port ${process.env.port}`);
});