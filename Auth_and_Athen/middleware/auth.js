const jwt = require('jsonwebtoken');


const JWT_secrate = "Aditya";

// auth middleware 

function auth(req,res,next){
    try{

        // token extraction 

        const token = req.body.token;


        // is missing 

        if(!token){
            return res.status(500).json({
                sucess:false,
                message:"Token is missing"
            })
        }

        // varify the toekn 
      try{
       const decode = jwt.verify(token , JWT_secrate);
       console.log(decode);

       req.user = decode;
       
      }catch(error){

        return res.status(401).json({
            sucess:false,
            message:"Token is invalid"
        })

      }

    next();
    }catch(error){
            return res.status(401).json({
                sucess:false,
                message:"Somting went wrong"
            })
    }
}


function isStudent(req,res,next){

    try{
     if(req.user.role !== 'Student'){
        return res.status(401).json({
            sucess:false,
            message:"This is protected route for student only "
        })
     }
     next();
    }catch(error){
       res.status(500).json({
        sucess:false,
        message:"User role can not matching"
       })
    }

}

function isAdmin(req,res,next){

    try{
     if(req.user.role !== 'Admin'){
        return res.status(401).json({
            sucess:false,
            message:"This is protected route for student only "
        })
     }
     next();
    }catch(error){
       res.status(500).json({
        sucess:false,
        message:"User role can not matching"
       })
    }

}

module.exports ={auth ,isAdmin,isStudent}

