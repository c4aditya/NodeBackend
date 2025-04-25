const mongoose = require("mongoose");


// process me data base url feed kr rha hu
require("dotenv").config(); 
// this data is come to the proces object 
function db_connect (){
    mongoose.connect(process.env.DB_URL, {

        
    })

    .then(
         ()=>{
            console.log("Data base Conection sucessfully")
         }
    )

    .catch(
        (error)=>{
             console.log("Geting Error while make connection with the data base ")
             console.log(error)            

        }
    )
}

db_connect();
// exporting the function 

module.exports = db_connect;