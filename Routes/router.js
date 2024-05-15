//1 import express
const express = require('express');

//import userController
const userController = require('../Controllers/userController');

const jwtMiddleware = require('../Middlewares/jwtMiddleware');

//2 create router object of express to define path
const router = express.Router();


//Register user
router.post('/registerUser', userController.registerUser);

//common login
router.post('/login', userController.login);

module.exports = router;