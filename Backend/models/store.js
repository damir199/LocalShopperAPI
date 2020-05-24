const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    opening_times: { type: String, required: true },
    rating: { type: String, required: true },
});

module.exports = mongoose.model('Store', storeSchema);