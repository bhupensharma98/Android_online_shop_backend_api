const mongoose = require("mongoose");
const Register = new mongoose.Schema({

  fullname: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("register", Register);