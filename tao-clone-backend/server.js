const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose');
const router = require('./Routers/userRouters');
const orgRouter = require('./Routers/OrgRouter')
const cookieParser = require('cookie-parser')
const testRouter = require('./Routers/TestRouter');
const studentRouter = require('./Routers/StudentRouter');

const app = express();
app.use(express.json())
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:3001']
}))
app.use(cookieParser())

dotenv.config({path: './.env'})

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_URL, ()=>{
  console.log('Database Connecetd');
})

const port = process.env.PORT || 4000

app.use('/', router)

app.use('/org', orgRouter)
app.use('/org', testRouter)
app.use('/student', studentRouter)
// app.use('/fs', fs) // Only For Debugging

app.listen(port, ()=>{
  console.log(`Server is Up and Running at Port: ${port}`);
})
