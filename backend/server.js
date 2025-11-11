import express from 'express'
import cors from 'cors'
import dbConnect from './config/db.js';
import dotenv from 'dotenv'
dotenv.config();

import router from './router/devrouter.js';


const PORT = process.env.PORT || 9000




// initialize the app
const app = express();

//middleware
app.use(express.json())
app.use(cors())
app.use('/api',router)

// test route
app.get('/',(req,res)=>{
  res.json('well come to Home')
})

// db connect
dbConnect();

app.listen(PORT,()=>{
console.log(`app start listening at http://localhost:${PORT}`)

})
