const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: String, required: true },
    discount: { type: String, required: false }


});

module.exports = mongoose.model('Product', productSchema);