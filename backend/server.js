import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"



// app config

const app = express()
const port = 4000

// middlewareS
 app.use(express.json())
 app.use(cors())

 // db connection
 connectDB();

 app.get("/",(req,res)=>{

    res.send("API Working")

 })

 app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
 })

 // mongodb+srv://Pro8960:Ban8960#%@cluster0.3ngvt.mongodb.net/?
 // mongodb+srv://Pro8960:Ban8960#%@cluster0.3ngvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0