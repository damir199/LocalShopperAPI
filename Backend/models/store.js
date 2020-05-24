const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: String, required: true },


});

module.exports = mongoose.model('Store', storeSchema);