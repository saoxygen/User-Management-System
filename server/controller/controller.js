var userDB = require("../model/model");

// create and save new user
exports.create = (req, res) => {
    // validate request

    if(!req.body){
        res.status(400).send({message: })
    }
}

// retrieve and return all users/ single user
exports.find = (req, res) => {
    res.send("find");
}

// update and save user by id
exports.update = (req, res) => {
    res.send("update");
}

// delete user by id
exports.delete = (req, res) => {
    res.send("delete");
}