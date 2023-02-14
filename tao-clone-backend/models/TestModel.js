const mongoose = require('mongoose')

const testModel = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  orgName:{
    type: String,
    required: true
  },
  duration:{
    type: Number,
    required: true,
    default: 3600
  },
  markPerQuestion:{
    type: Number,
    required: true,
    default: 5
  },
  questions:[
    {
      statement:{
        type: String,
        required: true
      },
      options: [
        {
          type: String,
          required: true
        }
      ],
      status:{
        type: String,
        default: 'not-attended'
      },
      answer:{
        type: String,
        required: true
      },
    }
  ],
  status:{
    type: String,
    required: true,
    default: 'not-started'
  },
  startTime:{
    type: Date,
    required: true,
    default: Math.floor(Date.now() + (1000*60*60*24))
  },
  students: [
    {
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
      password: {
        type: String,
        required: true
      },
      status:{
        type: String,
        required: true,
        default: 'not-attempted'
      },
      totalAttempted:{
        type: Number,
        required: true,
        default: 0
      },
      correctAnswer:{
        type: Number,
        required: true,
        default: 0
      }
    }
  ]
})

module.exports = mongoose.model('tests', testModel)