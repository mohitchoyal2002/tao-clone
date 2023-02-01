const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
app.use(express.json())
app.use(cors())

dotenv.config({path: './.env'})

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_URL, ()=>{
  console.log('Database Connecetd');
})

const port = process.env.PORT || 4000

app.listen(port, ()=>{
  console.log(`Server is Up and Running at Port: ${port}`);
})
