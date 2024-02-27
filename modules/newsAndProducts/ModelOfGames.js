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
        type: Number,
        required: true,
    },
    Price: {
        type: Number,
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
    Genre: {
        type: String,
        required: true,
    },
    Platform: {
        type: String,
        required: true,
    },

});

module.exports = newsSchema;
