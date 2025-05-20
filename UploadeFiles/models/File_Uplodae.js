const mongoose = require("mongoose");

const file_schema  = new mongoose.Schema({
    name:{
        type:"String",
        required:true,

    },

    imageURL:{
        type:"String",

    },
    tag:{
        type:"String",
        required:true,
    },
    email:{
        type:"String",
        required:true
    }
})

const file = mongoose.model("file" , file_schema);

module.exports = file;