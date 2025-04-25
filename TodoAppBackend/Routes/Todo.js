// import the controller 

const express = require("express");

const router = express.Router();

const  {createTodo} = require("../Controllers/CreateTodo")

// definr API route

router.post("/createTodo",createTodo)

module.exports = router;