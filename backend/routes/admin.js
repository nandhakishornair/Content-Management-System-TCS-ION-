const adminModel = require("../models/admindata");
const express = require("express");
const { default: mongoose } = require("mongoose");
const { json } = require("express");
const route = express.Router();
const bcrypt =require ("bcrypt");
// const { object } = require("joi");



route.post("/login", (req, res) => {
  console.log("inside the login route", req.body);
  // let email=req.body.email;
  // let pass = req.body.pass;
  adminModel.findOne({ email: req.body.email }, (err, data) => {
    if (err) {
      console.log(err);
      res.send(err)
      // res.send(err);
    } else if(data) {
      console.log("admin email  is matching");
      console.log("data", data);
      
      bcrypt.compare(req.body.password, data.password , (err,resp)=>{
        if(err){
          console.log("error in bcrypt")
          res.json({message:"error while password comparison"})
        }
         if(resp){
          res.json({message:"password matching"})
         }
         else{
          res.json({message:"password donot match"})
         }
      })
    }
else{
  console.log("wrong email id")
  res.json({message:"invalid email"})
}
  });
});

module.exports = route;
