const userService = require("../service/user.service");

exports.getUsers = async function(req, res) {
    const users = await userService.getUsers();
    console.log(users);
    res.status(200).send(users);
}

exports.getUser = async function(req, res){
    const user = await userService.getUser(req.params.id);
    console.log(user);

    res.status(200).send(user);
}

exports.createUser = async function(req, res){
    await userService.create(req.body);
    res.status(201).send('CREATED');
}