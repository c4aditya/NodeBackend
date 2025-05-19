const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;
async function dbconnect(){

    try{
       await mongoose.connect(DB_URL)       
        console.log("Database is connected sucessfully");
    }

     catch(error){
        console.log("Getting error while connection with the data base " , error );
    }

}

module.exports = dbconnect;
