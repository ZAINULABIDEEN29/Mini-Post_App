import express from "express"
import cors from 'cors'
import { connectDB } from "./db/connection.db.js";

import postRouter from "./routes/post.route.js"
const app =  express();

app.use(cors({
    origin:['http://localhost:5173','https://mini-post-app-f6ui-oxag1luyh-zains-projects-9ee060a9.vercel.app/']
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/v1',postRouter)

app.get("/",(req,res,next)=>{
    res.send({
        activeStatus:true,
        error:false
    })
})

app.listen(3000,()=>{
    connectDB();
    console.log("Port Running on http://localhost:3000")
})