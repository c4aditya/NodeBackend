const {model} = require("mongoose")
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },

        description:{
            type:String,
            required:true,
            maxLength:50
        },

        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },

        updateAt:{
            type:Date,
            required:true,
            default:Date.now()
        }
    }
)

// schema export 

// this is how we export the schema ever time mongoose.modelc("exporting name of the the schema  " , name of the schema that we created )
module.exports = mongoose.model("Todo" , todoSchema);