const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;