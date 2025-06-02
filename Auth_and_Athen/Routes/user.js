const express = require('express');

const router = express.Router();

const {signup , login} = require("../controllers/Auth")


router.post("/signup" ,signup);
router.post("/login" , login)




const {auth ,isStudent , isAdmin} = require('../middleware/auth');


// protected routes 

router.get("/test", auth , (req ,res)=>{
      res.json({
        sucess:true,
        message:"welcome to the Protected route of the Test "
    })
})

router.get("/student" , auth , isStudent,(req,res)=>{

    res.json({
        sucess:true,
        message:"welcome to the Protected route of the student "
    })

})

router.get('/admin' , auth , isAdmin, (req,res)=>{
    res.json({
        sucess:true,
        message:"Welcome to the Admin route"
    })
})




module.exports = router;


