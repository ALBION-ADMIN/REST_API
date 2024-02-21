const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String
},{collection:'USERS'});

module.exports = mongoose.model('User', userSchema);
