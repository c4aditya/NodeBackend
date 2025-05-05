const express= require("express");
const app = express();
const dbConnect = require("./config/database")
const PORT = process.env.PORT || 5000;
const fileUploade = require("express-fileupload")

// adding midlewares

app.use(fileUploade({
     useTempFiles : true,
    tempFileDir : '/tmp/'
}))



// making connection with the cloudinery



// api routes mount 


// data base connection

dbConnect();


// start the server 

app.listen(PORT , ()=>{
    console.log(`your server is startd at ${PORT}`)
})


