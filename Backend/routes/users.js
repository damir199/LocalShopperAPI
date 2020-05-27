const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

//Resgister user route
router.post('/register', userController.creatUser);

router.post('/login', userController.userLogin);

module.exports = router;
