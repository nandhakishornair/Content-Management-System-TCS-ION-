const superadmin = require("../models/superadmin");
const express = require("express");
const route = express.Router();

route.post("/asa",(req,res)=>{
  let datas = {
    email: req.body.email,
    password: req.body.password,
    
  };
  
  let data = new superadmin(datas);
  data.save();
  res.json({message:"new user data saving,,,"})
} 
)

route.post("/login", (req, res) => {
    console.log("inside the login route", req.body);
 
    superadmin.findOne({ email: req.body.email }, (err, data) => {
      if (err) {
        console.log(err);
        // res.json({"message":"enter valid email"})
         res.send(err);
      }
       else if(data){
        console.log("user email  is matching");
        console.log("data", data);
        
        
        if(req.body.password === data.password){
            console.log("password matching")
            res.json({message:"password matching"})
        }
        else{
            res.send({message:"invalid password"})
        }
      }
      else{
        res.send({message:"email not matching"})
      }
    });
  });

module.exports = route;
