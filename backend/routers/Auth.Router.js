const express = require('express');
const AuthController = require('../controllers/Auth.Controller');
const router = express.Router();


// router.get('/', AuthController.authUser);
router.post('/register', AuthController.registerUser);
router.post('/login', AuthController.loginUser);

module.exports = router
