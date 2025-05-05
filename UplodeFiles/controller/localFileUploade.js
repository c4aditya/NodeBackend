const fileUploade = require("../models/file")
// local file uploade handler function 
// the work of local handler function is fetch the file form client local system  and uploade directly to the server.

async function localfileUploade (req , res){
    try{

        // if i want to fetch the file then we use this hirerchy req.files.file 
        // step 1 - get the files by using req.files.file
        const file = req.files.file;
        console.log("ye console me print hoga ",file)

        // step 2- store the file to the server 
        // __ represent the current path name in this case the current directry is controller ->fileUploade    
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;  // current folder ke ander file folder me aa gye aur Date.now() call kr diya mtlb ye file ka name hai mtlb jo bhi file uplode hogi vo file ka name current date hoo jayega 

        // step 3 - define file.move 
        file.mv(path,(err)=>{

            console.log(err)
        })
        console.log("file uploade sucessfully ")
         res.json(
            {
            sucess:true,
            message:"Local File uploade sucessfully"
            }
         )

    }

    catch(error){
        console.log("not able for uplodae the file to the server ")
        console.log(error);
    }
}

module.exports = localfileUploade;