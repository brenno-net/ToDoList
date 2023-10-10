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
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: false,
      },
});

module.exports = mongoose.model('ToDo',todoSchema)