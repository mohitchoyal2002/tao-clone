const express = require("express");
const { createStudentToken, validateStudentToken } = require("../Controller/JWT");
const studentRouter = express.Router();
const TestModel = require("../models/TestModel");

studentRouter.post("/login", async (req, res) => {
  const { email, password, orgName } = req.body;
  try {
    const data = await TestModel.findOne({
      orgName: orgName,
      students: { $elemMatch: { email: email, password: password } },
    });
    if (data) {
      const students = data.students;
      for(let student of students){
        if (student.email === email && student.password === password) {
          student.orgName = orgName
          const token = createStudentToken(student);
          res.cookie('student-token', token)
          return res.json(data);
        }
      };
      return res.status(400).json("Student Not Found");
    } else {
      res.status(403).json("Invalid Credentials");
    }
  } catch (err) {
    res.status(400).json(`Somthing went Wrong:  ${err}`);
  }
});

studentRouter.put('/update-status', async(req, res)=>{
  const {email, orgName} = req.body
  try {
    const sdata = await TestModel.findOne({
      orgName: orgName,
      students: { $elemMatch: { email: email} },
    });
    if (sdata) {
      const sIndex = sdata.students.findIndex((student=>student.email === email))
      if(sIndex === -1){
        return res.status(400).json("Error: Something went wrong")
      }
      else{
        sdata.students[sIndex].status = 'attempted'
        await sdata.save();
        return res.json("Status-updated")
      }
    } 
  } catch(err){
    res.status(400).json(`Error: ${err}`)
  }
})


studentRouter.post('/check-status', async(req, res)=>{
  const {email, orgName} = req.body
  try {
    const sdata = await TestModel.findOne({
      orgName: orgName,
      students: { $elemMatch: { email: email} },
    });
    if (sdata) {
      const sIndex = sdata.students.findIndex((student=>student.email === email))
      if(sIndex === -1){
        return res.status(400).json("Error: Something went wrong")
      }
      else{
        if(sdata.students[sIndex].status === 'not-attempted'){
          return res.json(sdata.students[sIndex].status)
        }
        else{
          return res.status(403).json("Already Attempted")
        }
      }
    }
    else{
      res.status(400).json("Not Found anything")
    }
  } catch(err){
    res.status(400).json(`Error: ${err}`)
  }
})

studentRouter.get('/check', validateStudentToken, async(req, res)=>{
  const token = req.body.token.valid
  res.json(token)
})

studentRouter.post('/set-result', async(req, res)=>{
  const {email, orgName, total, correctAns} = req.body
  try {
    const sdata = await TestModel.findOne({
      orgName: orgName,
      students: { $elemMatch: { email: email} },
    });
    if (sdata) {
      const sIndex = sdata.students.findIndex((student=>student.email === email))
      if(sIndex === -1){
        return res.status(400).json("Error: Something went wrong")
      }
      else{
        sdata.students[sIndex].totalAttempted = total
        sdata.students[sIndex].correctAnswer = correctAns
        await sdata.save();
        return res.json("Status-updated")
      }
    } 
  } catch(err){
    res.status(400).json(`Error: ${err}`)
  }
})

module.exports = studentRouter;
