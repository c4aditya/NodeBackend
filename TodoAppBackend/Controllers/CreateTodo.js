// this conteoller use model beacuse we have to fill the data form accordingly with the schema that we define 

const Todo = require("../Models/Todo")

// define route handler
// data base intrection hum async from me krte hai kyo ki main thread block na hoo iss liye 

async function createTodo(req, res) {

    try {

        // extract titile and descripction from request ki body
        const {title ,description} = req.body;
        // create a new object and enter the database 
        // DB intrection
         const responce = await Todo.create({title ,description})
        // if the data is intersted into data base then some responce will show 
         res.status(200).json(
            {
                sucess:true,
                data:responce,
                message:"Entery Created Sucessfully"
            }
        )

        console.log("The data is send to the postman")

    }

    catch(error){
       
        console.log("Geeting error while connect with the data base")
        console.log(error)

        res.status(500).json(
            {
                sucess:false,
                data:"Internal Server Error",
                message:"error",
            }
        )

    }

}

module.exports = {createTodo};

