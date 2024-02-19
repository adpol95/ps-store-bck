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
    Cover: {
        type: String,
        required: true,
    },
    BackgroundImg: {
        type: String,
        required: true,
    },
    Developer: {
        type: String,
        required: true,
    },
    Rating: {
        type: String,
        required: true,
    },
    Price: {
        type: String,
        required: true,
    },
    Compatibility: {
        type: Array,
        required: true,
    },
    Age: {
        type: Object,
        required: true,
    },
    GameInfo: {
        type: String,
        required: true,
    },
    AdditionalInfo: {
        type: Object,
        required: true,
    },

});

module.exports = newsSchema;
