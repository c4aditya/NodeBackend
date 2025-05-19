const cloudinery = require('cloudinary').v2
require("dotenv").config();
 function cloudinaryConnection(){
    
try{ 
  cloudinery.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret:process.env.api_secret
   })

   console.log("Connected with the cloudinary")

}

catch(error){
    console.log("Getting error while making connection witht the cloudniery" , error)
}

}
module.exports = cloudinaryConnection;

