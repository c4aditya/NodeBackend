// db.js or config/db.js
const mongoose = require("mongoose");

function dbConnect() {
    mongoose.connect("mongodb://localhost:27017/signUpauth")
        .then(() => {
            console.log("Db connected successfully");
        })
        .catch((error) => {
            console.log("Db connection issue", error);
        });
}

module.exports = dbConnect;
