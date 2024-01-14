const mongoose = require('mongoose');

const {Schema} = mongoose;
const newsSchema = new Schema({
    news: {
        type: Array,
        required: true,
        unique: true,
    }
});

module.exports = mongoose.model('News', newsSchema);
