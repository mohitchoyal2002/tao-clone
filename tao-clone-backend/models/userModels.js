const mongoose = require('mongoose')

const userTemplete = mongoose.Schema({
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
  companyName:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model('/users', userTemplete)