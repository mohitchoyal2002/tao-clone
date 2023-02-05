const mongoose = require('mongoose')

const DemoTest = mongoose.Schema({
  duration: {
    type: Number,
    required: true
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
      answer:{
        type: String,
        required: true
      }
    }
  ]
})

module.exports = mongoose.model('DemoTest', DemoTest)