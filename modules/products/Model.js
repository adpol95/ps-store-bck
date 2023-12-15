const mongoose = require('mongoose');

const {Schema} = mongoose;
const productsSchema = new Schema({
    games: {
        type: Array,
        required: true,
        unique: true,
    },
    consoles: {
        type: Object,
        required: true,
        unique: true,
    },
    accessories: {
        type: Object,
        required: true,
        unique: true,
    }
});

module.exports = mongoose.model('Products', productsSchema);
