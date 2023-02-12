const express = require('express')
const TestModel = require('../models/TestModel')
const {validateToken} = require('../Controller/JWT')
const passwordGenerator = require('password-generator')
const sendEmail  = require('../Controller/sendMail')

const testRouter = express.Router();

testRouter.post('/add-test', validateToken, async(req, res)=>{
  const test = req.body
  const {orgName, name} = req.body 
  const testModelCopy = new TestModel(test)
  try{
    const tests = await TestModel.findOne({orgName: orgName}, {name: name})
    if(!tests){
      res.status(400).json("Test already created")
    }
    else{
      const data = await testModelCopy.save();
      res.status(201).json("Test Created")
    }
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

testRouter.put('/update-status', validateToken, async(req, res)=>{
  const {name, orgName, status} = req.body
  try{
    const data = await TestModel.updateOne({name: name, orgName: orgName}, {status: status})
    res.status(200).json({"updated Data": data})
  }
  catch(err){
    res.status(400).json({Error: err})
  }
})

testRouter.post('/register', validateToken, async(req, res)=>{
  const {name, email, phoneNo, orgName, testName} = req.body;
  const password = passwordGenerator(5);
  try{
    const data = await TestModel.findOne({orgName: orgName, name: testName})
    if(!data){
      res.status(400).json("Error: Test Not Found")
    }
    else{
      const students = data.students;
      const student = {name, email, phoneNo, password}
      if(!students.includes(student)){
        students.push(student);
        try{
          await TestModel.updateOne({orgName:orgName, name: testName}, {students:students})
          sendEmail(student)
          res.status(200).json("Student has been registered");
        }
        catch(err){
          res.status(400).json("Could not Register")
        }
      }
      else{
        res.status(400).json("Student already registered");
      }
    }
  }
  catch(err){
    console.log(err);
    res.status(400).json('ERROR: Something went Wrong')
  }
})

module.exports = testRouter