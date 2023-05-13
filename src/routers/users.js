const express = require("express");
const UserController = require("../controllers/users");

const router = express.Router();


router.get('/user', UserController.getUsers);
router.get('/user/:id', UserController.getUser);
router.post('/user', UserController.create);

module.exports = router