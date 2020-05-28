const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const vendorSchema = mongoose.Schema({
	name: { type: String, required: true, unique: false },
	companyName: { type: String, required: true, unique: false },
	companyAddress: { type: String, required: true, unique: false },
	companyPostcode: { type: String, required: true, unique: false },
	companyContact: { type: String, required: true, unique: false },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

vendorSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Vendor', vendorSchema);
