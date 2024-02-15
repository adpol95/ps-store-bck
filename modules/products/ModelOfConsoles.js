const mongoose = require('mongoose');

const {Schema} = mongoose;
const productsSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
        required: true,
        unique: true,
    },
    value: {
        type: Object,
        required: true,
    }
});

module.exports = mongoose.model('Consoles', productsSchema);
