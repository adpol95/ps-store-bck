const mongoose = require('mongoose');

const {Schema} = mongoose;
const newsSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    value: {
        type: Array,
        required: true,
    },

});

module.exports = mongoose.model('News', newsSchema);
