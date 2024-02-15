const mongoose = require('mongoose');

const {Schema} = mongoose;
const newsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
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

module.exports = newsSchema;
