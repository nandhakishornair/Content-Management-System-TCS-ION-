const express = require("express");
const app = express();
const mongoose = require("mongoose");
const  cors = require('cors');


const Manageadmin =require("./routes/manage-admin");
const user = require("./routes/user");

// Middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(cors());

app.use("/superadmin",Manageadmin);
app.use("/user",user);


mongoose.connect(process.env.dbUrl, {   useNewUrlParser: true
    // useUnifiedTopology: true,
    // useCreateIndex: true       
 }, () =>
console.log('Connected to DB!')
);
// Server
app.listen(3000,() => {
console.log('Server starts at :3000');  
});