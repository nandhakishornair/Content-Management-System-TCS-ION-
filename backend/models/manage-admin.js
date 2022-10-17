const mongoose = require("mongoose");

const adminSchema=mongoose.Schema({
    name:String,
    email:String,
    
});

const manage = mongoose.model("manageadmin", adminSchema);
module.exports=manage;