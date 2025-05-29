const express = require("express");
const app = express();
const PORT = 5000
// app.use('/', (req ,res)=>{
//     res.send("The Resonce is sends on the screen ");
// })
// adding middle ware 

app.use(express.json());
// db connection 

const dbConnect = require("./config/db");
dbConnect();

// router import and mount 

const userRoute = require("./Routes/user");

// mount 

app.use("/api/v1" ,userRoute );

// server inisiate

app.listen(PORT , ()=>{
    console.log(`Your server is start on ${PORT}`)
})


