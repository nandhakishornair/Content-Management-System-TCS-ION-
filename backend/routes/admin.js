const adminModel = require("../models/admin-and-users");
const express = require("express");
const { default: mongoose } = require("mongoose");
const { json } = require("express");
const route = express.Router();
const bcrypt =require ("bcrypt");
const Category = require("../models/category")
const post =require("../models/posts")



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
  console.log("body in addcategory route", req.body);
    let datas = {
      categoryTitle:req.body.categoryTitle,
      description:req.body.description
    };
    let data = new Category(datas);
    data.save().then(console.log("saved successfully"));
    res.json({message:"new user data saving,,,"})
  } 
);

route.get("/viewCategories",(req,res)=>{
  Category.find().then((data)=>{
    res.send(data);
  })
  })

  route.post("/addPost/:categoryTitle", async(req, res) => {
    
    // console.log("category title is ",category)
    console.log("body in add post route", req.body);
    let datas ={
      // email:req.body.email,
       category:req.params.categoryTitle,
       heading:req.body.heading,
       description:req.body.description
    }
    let data = new post(datas);
    data.save().then(console.log("post is saved"))
  });

  route.get("/viewPostsInCategory/:categoryTitle",(req,res)=>{
    let category = req.params.categoryTitle

    post.findOne({"category":category},(err,data)=>{
      if(err){
        console.log(err)
        res.send(err);
      }
      else if(data){
         console.log(data)
         res.json(data)
      }
    })
  })
  // deleteCategory
  route.delete('/deleteCategory/:categoryName',function(req,res){
    const category = req.params.categoryName;
    //console.log(id);
    Category.findOneAndDelete({"categoryTitle":category})
    .then(()=>{
        console.log('delete success')
        //res.send();
      //   jobsModels.find()
      // .then((joblist)=>{
      //     res.send(joblist);
          //console.log(joblist);
      }); 
    });

module.exports = route;
