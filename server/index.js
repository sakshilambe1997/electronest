import express, { json } from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const app = express();
 app.use(express.json());
 app.use(cors())


const connectDb = async()=>{
    const conn = await mongoose.connect(process.env.MONGO_URL)

    if(conn){
        console.log("MongoDB connected successfully!!");
    }
}
connectDb();

app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to ElectroNest API"
    })
})

 const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
})

