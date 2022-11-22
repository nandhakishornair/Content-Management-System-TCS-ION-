const usersModel = require("../models/admin-and-users");
const express = require("express");
const { default: mongoose } = require("mongoose");
const { json } = require("express");
const route = express.Router();
const bcrypt =require ("bcrypt");
const { object } = require("joi");
const category = require("../models/category")
const post = require("../models/posts")

route.post("/signup", async(req, res) => {
  console.log("body in signup route", req.body);
  let user =await usersModel.find({"email":req.body.email});
  if (Object.keys(user).length>0){
res.json({message:"user already exixt"})
  }
  else if(Object.keys(user).length==0){
    let datas = {
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      city: req.body.city,
      state: req.body.state,
      gender: req.body.gender,
    };
    datas.password = await bcrypt.hash(datas.password,10)
    let data = new usersModel(datas);
    data.save();
    res.json({message:"new user data saving,,,"})
  } 
  else{
    res.json({message:"some error occured"})
  }
 
});

route.post("/login", (req, res) => {
  console.log("inside the login route", req.body);
  // let email=req.body.email;
  // let pass = req.body.pass;
  usersModel.findOne({ email: req.body.email ,isAdmin:false}, (err, data) => {
    if (err) {
      console.log(err);
      res.json({"message":"enter valid email"})
      // res.send(err);
    } else {
      console.log("user email  is matching");
      console.log("data", data);
      
      bcrypt.compare(req.body.password,data.password , (err,resp)=>{
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
  });
});

route.get("/viewCategories",(req,res)=>{
  category.find().then((data)=>{
    console.log("the categories are",data)
    res.send(data)
  })
})

route.get("/viewAllPost",(req,res)=>{

})
route.get("/viewYourPost/:email",(req,res)=>{
  email = req.params.email;
  console.log(email)
post.find({email:email}).then((data)=>{res.send(data)})
})

route.post("/addPost",(req,res)=>{
  console.log(req.body)
  // em = req.body.email;
  // console.log(em)
  let data={
    // email:String,
    heading:req.body.heading,
    description:req.body.description,
    category:req.body.category,
    email:req.body.email
  }
  let datas = new post(data);
datas.save().then(console.log("data saved"))
})

route.delete("/deletePost/:id",(req,res)=>{
  let id = req.params.id;
  post.findByIdAndDelete({_id:id}).then(()=>{
    console.log("deleted");
  res.send({"message":"deleted"})
  })
  
})

route.get("/viewApost/:postid",(req,res)=>{
  let id=req.params.postid;
  console.log(id)
  post.findOne({_id:id}).then((data)=>{
    console.log(data)
    res.send(data);
  })
})

route.get("/viewPostsInCategory/:categoryTitle",(req,res)=>{
  let category=req.params.categoryTitle;
  console.log(category)
  post.find({category:category}).then((data)=>{
    console.log(data)
    res.send(data);
  })
})

route.put("/updatePost",(req,res)=>{
  
})

module.exports = route;
