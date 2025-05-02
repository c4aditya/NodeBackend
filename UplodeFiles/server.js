const express= require("express");
const app = express();
const dbConnect = require("./config/database")
const PORT = process.env.PORT || 5000;

// start the server 

app.listen(PORT , ()=>{
    console.log(`your server is startd at ${PORT}`)
})

// data base connection

dbConnect();
