const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  category: {
    type: String,
    post: {
      email: {
        type: String,
        minlength: 5,
        maxlength: 255,
      },
      heading: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  },
});

const category = mongoose.model("category", categorySchema);
module.exports = category;
