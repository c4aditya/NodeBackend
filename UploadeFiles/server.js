const express = require("express");

const app = express();

// geeting PORT form env 

require("dotenv").config()

const PORT  = process.env.PORT || 4400

// adding middlewares 


// mount routes 



// database connection 
const db_connection = require("./config/dbConnect")
db_connection();
// cloudinery connection 

const cloudinary = require("./config/cloudinary");
cloudinary();
// starting a server 

app.listen(PORT , ()=>{
    console.log(`Your port is starred at ${PORT}`);
});


