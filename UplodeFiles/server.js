const express= require("express");
const app = express();
const dbConnect = require("./config/database")
const PORT = process.env.PORT || 5000;
// import cloudinary 
const cloudniery = require("./config/cloudiney")

// use file uplode get 

const fileUploade = require("express-fileupload")

// adding midlewares


app.use(express.json());

// 1- addng middile ware for file uploade
// app.use(fileUploade({
//      useTempFiles : true,
//     tempFileDir : '/tmp/'
// }))

app.use(fileUploade());


// making connection with the cloudinery

cloudniery();

// importig api route 

const Uploade= require("./routes/fileUploade")

// api routes mount 

app.use("/api/vi/fileUploade",Uploade)

// data base connection

dbConnect();


// start the server 

app.listen(PORT , ()=>{
    console.log(`your server is startd at ${PORT}`)
})


