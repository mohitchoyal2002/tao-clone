const mongoose = require('mongoose')

const stModel = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  orgName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('students', stModel);