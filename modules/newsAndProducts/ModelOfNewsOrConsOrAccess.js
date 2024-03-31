const mongoose = require('mongoose');

const {Schema} = mongoose;
const newsSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true,
    },
    page: {
        type: String,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },

    value: {
        type: Object,
        required: true,
    }
});

module.exports = newsSchema;
