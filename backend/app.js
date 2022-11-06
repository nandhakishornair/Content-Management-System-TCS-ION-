const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const Manageadmin = require("./routes/manage-admin");
const user = require("./routes/user");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use("/superadmin", Manageadmin);
app.use("/user", user);

let dburl =
  "mongodb+srv://tcsion:ZW9gV0QxjqiGclvl@cluster0.kfviieu.mongodb.net/test";
mongoose.connect(dburl, {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true
});
mongoose.connection.on("connected", () => {
  console.log("connected");
  console.log(mongoose.connection.readyState); //logs 1
});
// Server
app.listen(3000, () => {
  console.log("Server starts at :3000");
});
