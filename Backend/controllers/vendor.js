const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/vendor');

exports.creatVendor = (req, res, next) => {
	//hash the provided password
	bcrypt.hash(req.body.password, 10).then((hash) => {
		//Use hashed password and users email to create a new user securely
		const vendor = new Vendor({
			name: req.body.name,
			companyName: req.body.companyName,
			companyAddress: req.body.companyAddress,
			companyPostcode: req.body.companyPostcode,
			companyContact: req.body.companyContact,
			email: req.body.email,
			password: hash,
		});
		//save the new user to the database
		vendor
			.save()
			.then((result) => {
				res.status(201).json({
					message: 'Vendor created',
					result: result,
				});
			})
			//if there is an error reply with the error details
			.catch((err) => {
				res.status(500).json({
					message: 'Failure! Vendor already exists',
					error: err,
				});
			});
	});
};
