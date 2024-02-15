const mongoose = require('mongoose');

const {Schema} = mongoose;
const accessSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
        required: true,
    },
    value: {
        type: Object,
        required: true,
    }
});

module.exports = mongoose.model('Accessories', accessSchema);
