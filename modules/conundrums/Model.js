const mongoose = require('mongoose');
const { Schema } = mongoose;

const conunSchema = new Schema({
  riddles: {
    type: Object,
    required: true,
    unique: true,
  },
  schoolPrg: {
    type: Array,
    required: true,
    unique: true,
  }
});

const conunModel = mongoose.model('Conun', conunSchema);
module.exports = conunModel;