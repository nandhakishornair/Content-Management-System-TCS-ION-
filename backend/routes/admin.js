const adminModel = require("../models/admin-and-users");
const express = require("express");
const { default: mongoose } = require("mongoose");
const { json } = require("express");
const route = express.Router();
const bcrypt =require ("bcrypt");
const CategoryAndPost = require("../models/category")
// const { object } = require("joi");



route.post("/login", (req, res) => {
  console.log("inside the login route", req.body);
  
  adminModel.findOne({ email: req.body.email ,isAdmin:true}, (err, data) => {
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

route.get("/landing",(req,res)=>{
CategoryAndPost.find().then((data)=>{
  res.send(data);
})
})

route.post("/addCategory", async(req, res) => {
  console.log("body in signup route", req.body);
    let datas = {
      category:req.body.category
    };
    let data = new CategoryAndPost(datas);
    data.save();
    res.json({message:"new user data saving,,,"})
  } 
 
 
);

module.exports = route;
