const mongoose = require('mongoose')

const user = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('User', user)