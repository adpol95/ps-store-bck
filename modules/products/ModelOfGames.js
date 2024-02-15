const mongoose = require('mongoose');

const {Schema} = mongoose;
const gamesSchema = new Schema({
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
    page: {
        type: String,
        required: true,
    },
    value: {
        type: Object,
        required: true,
    }
});

module.exports = mongoose.model('Games', gamesSchema);
