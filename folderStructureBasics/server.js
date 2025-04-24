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

    res.send("This is home page ")
})