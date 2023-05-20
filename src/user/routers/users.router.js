const express = require("express");
const resolverHandler = require("../../core/helpers/resolver.handler");
const userController = require("../controller/user.controller");

const router = express.Router();


router.get('/user', resolverHandler(userController.getUsers));
router.get('/user/:id', resolverHandler(userController.getUser));
router.post('/user', resolverHandler(userController.createUser));
router.patch('/user/:id', resolverHandler(userController.updateUser));
router.delete('/user/:id', resolverHandler(userController.deleteUSer));


module.exports = router