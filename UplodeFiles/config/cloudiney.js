// cloudniery import and config here

const cloudinery = require("cloudinary").v2;
require("dotenv").config();
 function cloudinaryConnect(){
     try{
        cloudinery.config({
            cloud_name:process.env.cloudName,
            cloud_secret:process.env.API_SECRET,
            cloud_key:process.env.API_KEY,
        });

        }

     catch(error){
        console.log("getting error while make connection with the cloudinery")
        console.log(error)
     }
}

module.exports = cloudinaryConnect;