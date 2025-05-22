const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    gender: {
        type: String,
        required: true
    }, 
    status: {
        type: String,
        required: true
    }
})

const userDB = mongoose.model("userDB", schema);

module.exports = userDB;