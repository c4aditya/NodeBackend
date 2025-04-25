// cretaing a server using express
 
const express = require("express");
// const bodyParser = require("body-parser");
const app = express();

// middleware
app.use(express.json())
// server created 
app.listen(3000 , ()=>{
    console.log("Your server is started at 3000")
})

app.get('/', (req,res)=>{
    res.send("Server on get request")
})

app.post("/home", (req,res)=>{
    const {name , brand} = req.body;
    console.log(name , brand)
// ye jo bhi responce hoga vo muje post call krne ke baad agr shi data hai to muje mere UI peshow hoga thik washai ki jashai ki postman pe show hota hai 
    res.send("This is home page ")
})

// making connection with the database 

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/pratice",{

    
})

.then(()=>{
    console.log("DB Connection Sucessfully")
})

.catch((error) =>{
    console.log("DB connection problem")
    console.log(error)
    

})
