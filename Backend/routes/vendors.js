const express = require('express');

const vendorController = require('../controllers/vendor');

const router = express.Router();

//Resgister user route
router.post('/register', vendorController.creatVendor);

module.exports = router;
