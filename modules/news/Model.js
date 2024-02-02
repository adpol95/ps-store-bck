const mongoose = require('mongoose');

const {Schema} = mongoose;
const newsSchema = new Schema({
    ps5: {
        type: Array,
        required: true,
        unique: true,
    },
    psvr2: {
        type: Array,
        required: true,
        unique: true,
    },
    ps4: {
        type: Array,
        required: true,
        unique: true,
    },
    psstore: {
        type: Array,
        required: true,
        unique: true,
    },
    psplus: {
        type: Array,
        required: true,
        unique: true,
    },

});

module.exports = mongoose.model('News', newsSchema);
