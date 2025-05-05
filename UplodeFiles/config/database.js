const mongoose = require("mongoose");
require("dotenv").config();
async function dbConnect() {
   await mongoose.connect(process.env.dbURL, {

    })

    try {
        console.log("your Databse is conected");
    }

    catch (error) {
        console.log(error)
        console.log("getting error while make connection with the data base ")
    }
}

module.exports = dbConnect;