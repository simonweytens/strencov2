const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    registeredAt:{
        type: Date,
        required: true,
        default: Date.now
    }
})
module.exports = mongoose.model('register', registerSchema)