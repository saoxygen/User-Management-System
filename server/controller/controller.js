var userDB = require("../model/model");

// create and save new user
exports.create = (req, res) => {
    // validate request

    if(!req.body){
        res.status(400).send({message: "error"});
        return
    }

    // new user 
    // note this matches the schema we set up in the model js file
    const user = new userDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    // save user in the db
    user.save(user)
    .then(data => {
        res.send(data)
    }).catch(e => {
        res.status(500).send({message: e.message || "Oops an error happened while creating the new user"})
    });
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