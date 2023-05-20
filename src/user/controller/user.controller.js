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

exports.updateUser = async function(req, res){
    const id = req.params.id;
    const body = req.body
    await userService.update(id, body);
    res.status(204).send('UPDATED');
}

exports.deleteUSer = async function(req, res){
    const id = req.params.id;
    await userService.delete(id);
    res.status(204).send('DELETED');
}