const express = require('express')
const orgRouter = express.Router()
const orgModel = require('../models/OrganizationModel')
const bcrypt = require('bcrypt')
const {createToken, validateToken} = require('../Controller/JWT')

orgRouter.post('/signup', async(req, res)=>{
  const {name, email, phoneNo, password} = req.body
  try{
    const org = await orgModel.findOne({email: email});
    if(org !== null){
      res.status(403).json("organization already registered !")
    }
    else{
      const hashedPass = await bcrypt.hash(password, 10)
      const newOrg = new orgModel({
        name: name,
        email: email,
        phoneNo: phoneNo,
        password: hashedPass
      })
      const save = await newOrg.save()
      res.status(200).json("registered")
    }
  }
  catch(err){
    res.status(400).json({Err: `Error: ${err}`})
  }
})

orgRouter.post('/login', async(req, res)=>{
  const {email, password} = req.body
  try{
    const org = await orgModel.findOne({email: email})
    if(org === null){
      res.json("org. not registered, Please Sign Up")
    }
    else{
      if(await bcrypt.compare(password, org.password)){
        res.json("Logged in")
        const token = createToken(org);
      }
      else{
        res.json("Incorrect credentials")
      }
    }
  }
  catch(err){
    console.log(err);
    res.status(400).json("Error: something went wrong")
  }
})

module.exports = orgRouter