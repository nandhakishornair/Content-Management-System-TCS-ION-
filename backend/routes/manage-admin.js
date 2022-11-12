const adminmodel = require("../models/admin-and-users");
const express = require("express");
const route = express.Router();

// route.post("/add", async (req, res) => {
//   console.log(req.body.email);
//   let admin = await adminmodel.findOne({ email: req.body.email });
//   admin = JSON.parse(JSON.stringify(admin));
//   console.log("admin", admin);
//   if (admin != null) {
//     console.log("value found");
//   } else {
//     // let em = JSON.parse(JSON.stringify(data));
//     console.log("saving new data");
//     let newadmin = {
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       designation: req.body.designation,
//       status: req.body.status,
//     };
//     let data = new adminmodel(newadmin);
//     data.save();
//   }
// });

module.exports = route;
