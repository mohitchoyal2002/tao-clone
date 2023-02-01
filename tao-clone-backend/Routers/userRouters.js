const express = require('express')
const userTemplete = require('../models/userModels')
const passwordGenerator = require('password-generator')
const sendEmail = require('../Controller/sendMail')

const router = express.Router();

router.post('/demo', async(req, res)=>{
  const {name, email, phoneNo, companyName} = req.body
  const password = passwordGenerator(8);

  
})


module.exports = router;