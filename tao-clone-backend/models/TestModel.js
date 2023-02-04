const mongoose = require('mongoose')

const testModel = mongoose.Schema({
  orgName: {
    type: String,
    required: true
  },
  questions: [
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
      answer:{
        type: String,
        required: true
      }
    }
  ]
})

module.exports = mongoose.model('tests', testModel)