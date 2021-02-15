const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type: String, required: true, minLength:3, maxLength:60},
    email: {type: String, required: true, minLength:3, maxLength:120},
    password: {type: String, required: true, minLength:6, maxLength:200},
    admin: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now, required: true},
});

module.exports = mongoose.model('User', userSchema);