const bcrypt = require("bcrypt");

const model = require("../models/userModel");


// signup router handler 

async function signup(req ,res){

    try{
  
        // geting the input data 

        const {name , email ,password , role} = req.body

        // check if user already exist 
        // it is an db interection
        
        const existing_user = await model.findOne({email}); // findout kr ke lavo ki is data base me ko matching email hai ki nhi jo user enter kr rha haui
        if(existing_user){
           return res.status(500).json({
                sucess:false,
                message:"User Already exist",
            })
        }

       //  hasing password 
       let hashpassword ; 
       // isse hum try catch me use krenge kyoki ye yek hashkrne me time lg saquta hai 
       try{
       // isme basically use kr rhe hai ki kisko hash [password]krna hai aur kitne round hash krna hai [10]
        hashpassword = await bcrypt.hash(password , 10)
         console.log(hashpassword)    

       }
       catch(error){
              console.log("Getting problem while hasing the password ", error)
       }


       // now after hasing the password and check the validation like email is already exist or not now if all is good then make enrty in data base 

       // create entry on databse 
        const user = await model.create({
            name,
            email,
            password:hashpassword,
            role,
        })

         console.log(user)

          return res.status(200).json({
            sucess:true,
            message:"Signup sucessfully",
        
        })

       

       }

    catch(error){
         console.log(error)
         return  res.status(500).json({
            sucess:false,
            message:"Getting error while signup",

            
        })

    }
}

module.exports = signup;