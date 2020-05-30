const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const vendorSchema = mongoose.Schema({
	name: { type: String, required: true },
	companyName: { type: String, required: true },
	companyAddress: { type: String, required: true },
	companyPostcode: { type: String, required: true },
	companyContact: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

vendorSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Vendor', vendorSchema);
