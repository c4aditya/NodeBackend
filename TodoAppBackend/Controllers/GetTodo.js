const Todo = require("../Models/Todo")

async function getTodo(req,res){

    try{
        //fetch all todo itmes form database 

         const todos = await Todo.find({})

           res.status(200).json({
            sucess:true,
            data:todos,
            message:"All todo data is fetched "
           })
       
    }

    catch(error){
        
        res.status(500).json({
            sucess:false,
            message:"Getting error while fetching the TODO itmes form DB"
        })

      console.log(error)
    }
}

module.exports= {getTodo};