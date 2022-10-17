const adminschema = require("../models/manage-admin");
const express = require("express");
const route = express.Router();

route.get("",(req,res)=>{
    res.send({key:"jack"})
})
module.exports = route;