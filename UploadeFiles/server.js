const express = require("express");
const file_uploade = require("express-fileupload")
const app = express();

// geeting PORT form env 

require("dotenv").config()

const PORT  = process.env.PORT || 4400

// adding middlewares 

app.use(express.json());

// adding middleware for file uploade 
// it's a third party packege 
app.use(file_uploade());

// mount routes 
const local_file_uploade = require("./route/fileUploade")
app.use("/api/v1",local_file_uploade)

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


