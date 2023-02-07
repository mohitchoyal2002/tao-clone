const express = require('express')
const TestModel = require('../models/TestModel')
const {validateToken} = require('../Controller/JWT')

const testRouter = express.Router();

testRouter.post('/add-test', validateToken, async(req, res)=>{
  const test = req.body
  const testModelCopy = new TestModel(test)
  try{
    const data = await testModelCopy.save();
    res.status(201).json("Test Created")
  }
  catch(err){
    res.status(400).json("Error: "+err)
  }
})

testRouter.get('/tests', validateToken, async(req, res)=>{
  const org = req.body.token.valid.name
  try{
    const data = await TestModel.find({orgName: org});
    res.status(200).json(data)
  }
  catch(err){
    res.status(400).json('Error: Something went wrong')
  }
})

testRouter.put('/update-status', async(req, res)=>{
  const {name, orgName, status} = req.body
  try{
    const data = await TestModel.updateOne({name: name, orgName: orgName}, {status: status})
    res.status(200).json({"updated Data": data})
  }
  catch(err){
    res.status(400).json({Error: err})
  }
})

module.exports = testRouter