const express = require('express')
const userTemplete = require('../models/userModels')
const passwordGenerator = require('password-generator')
const sendEmail = require('../Controller/sendMail');
const { createToken, validateToken } = require('../Controller/JWT');
const DemoTest = require('../models/DemoTest')

const router = express.Router();

router.post('/demo', async(req, res)=>{
  const {name, email, phoneNo, companyName} = req.body
  const password = passwordGenerator(8);
  let user = {name: name, email: email, phoneNo: phoneNo,  companyName: companyName, password: password}
  try{
    user = await userTemplete.findOne({email: email})
    if(user == null){
      user = {name: name, email: email, phoneNo: phoneNo,  companyName: companyName, password: password}
      const userTempleteCopy = new userTemplete(user);
      const save = await userTempleteCopy.save();
    }
    const data = await sendEmail(user)
    res.status(200).json({data: "Email has been sent to your email id check the link and the password"})
  }
  catch(err){
    console.log(err);
    res.status(400).json({err: err});
  }
})

router.post('/login', async(req, res)=>{
  const {email, password} = req.body 
  try {
    const user = await userTemplete.findOne({email: email, password: password})
    if(user == null){
      res.status(403).json({msg: "Invalid username or Password"})
    }
    else{
      const token = createToken(user)
      res.cookie('access-token', token)
      res.status(200).json({msg: user})
    }
  }catch (err) {
    console.log(err);
    res.status(400).json({msg: `Error: ${err}`})    
  }
})

router.get('/test', async(req, res)=>{
  try{
    const test = await DemoTest.findOne()
    res.json(test)
  }
  catch(err){
    res.status(400).json(err)
  }
})

module.exports = router;