const mongoose = require("mongoose");

const userSchema=mongoose.Schema({
    email:String,
    firstname:String,
    lastname:String,
    phone:String,
    city:String,
    state:String

});

const user = mongoose.model("user", userSchema);
module.exports=user;