const mongoose = require('mongoose')

const orgModel = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  phoneNo:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
})
module.exports = mongoose.model('organizations', orgModel)