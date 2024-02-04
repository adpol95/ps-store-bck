const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  birthDay: {
    type: String,
    required: true,
  }

});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;