// import the controller 

const express = require("express");

const router = express.Router();

const  {createTodo} = require("../Controllers/CreateTodo")
const {getTodo} = require("../Controllers/GetTodo")

// definr API route

router.post("/createTodo",createTodo)

router.get("/yourTodos" ,getTodo )



module.exports = router;