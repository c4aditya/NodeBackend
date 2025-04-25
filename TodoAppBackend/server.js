const express = require("express");

const app = express();

app.use(express.json());

// load the config file 

require("dotenv").config();


const PORT = process.env.PORT || 4000 ;

// import routes 

const TodoRoute = require("./Routes/Todo")

// mount Api routes 
app.get("/" , (req,res) => {
    console.log("The get pat is hit ")
    res.send("This is home page")
})
app.use("/api/v1" , TodoRoute)

// server start 

app.listen(PORT , () =>{
    console.log(`server is started at ${PORT}`)
})


// db connectio 

const DB_connect= require("./config/database")

DB_connect();

// default route 

