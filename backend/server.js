import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import developerRoutes from "./routes/developerRoutes.js";


const PORT = process.env.PORT || 9000




// initialize the app
const app = express();

//middleware
app.use(express.json())
app.use(cors())
app.use("/api/auth", authRoutes);
app.use("/api/developers", developerRoutes);

// test route
app.get('/',(req,res)=>{
  res.json('well come to Home')
})

// db connect
connectDB();

app.listen(PORT,()=>{
console.log(`app start listening at http://localhost:${PORT}`)

})
