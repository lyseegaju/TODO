import express from 'express';
import connectdb from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

const app=express();

 connectdb();
 
app.listen(3000,()=>{
    console.log("listening to port 3000");
})