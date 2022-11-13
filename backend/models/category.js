const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  categoryTitle:  String ,
  post:{email:String,heading:String,description:String}
});


const category = mongoose.model("category", categorySchema);
module.exports = category;

// post: {
//   email: {
//     type: String,
//     
//   },
//   heading: {
//     type: String,
//   },
//   description: {
//     type: String,
//   },
// },