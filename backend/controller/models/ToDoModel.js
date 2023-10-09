const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text:{
        type: String,
        require: true
    },
    check: {
        type: Boolean,
        default: false,
      },
    date: {
        type: Date,
        default: Date.now(),
      }
})

module.exports = mongoose.model('ToDo',todoSchema)