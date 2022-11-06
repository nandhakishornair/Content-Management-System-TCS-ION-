const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  firstname: { type: String },
  lastname: { type: String },
  phone: { type: String },
  city: { type: String },
  state: { type: String },
  gender: { type: String },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
