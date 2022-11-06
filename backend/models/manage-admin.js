const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },

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
  isSubadmin: { type: Boolean, default: true },

  status: { type: String, default: "Enable" },
});

const manage = mongoose.model("manageadmin", adminSchema);
module.exports = manage;
