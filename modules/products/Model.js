const mongoose = require('mongoose');

const {Schema} = mongoose;
const productsSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    value: {
        type: Object,
        required: true,
        unique: true,
    }
});

module.exports = mongoose.model('Products', productsSchema);
