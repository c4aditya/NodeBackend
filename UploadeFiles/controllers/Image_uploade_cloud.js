const file = require("../models/File_Uplodae");
const clodinary = require("cloudinary").v2;
async function cloudUplodae(req , res){

    function IsSupportedFileType( supported_type,file_type){

        return  supported_type.includes(file_type)
    }


 

    try{
        // data fetch form body ex postman or frontend

        const {name ,tag ,email, imageURL}= req.body;
        console.log(name ,tag ,email ,imageURL)

        // file recive krna hai

        const file = req.files.Cloud_image_uploade;
        console.log(file)
        // step 2 -  validatio 

        const supported_types = ["jpg","png","jpeg"];

        // file type niklna hao kis type ki file aa rhi hai 

        const file_type = file.name.split('.').pop().toLowerCase();


         if(!IsSupportedFileType(supported_types,file_type  )){
             res.json({
                success:false,
                message:"This is not the Supported type you can uploade ex- jpeg , png ,jpg files only"
             })
         } 
         
         // file formated is supported 

         // then we have to uploade into the cloudinary 

            // asyc function form upoade file to cloudinary 

    async function Uploadecloudinary(){

        try{

       const result = await clodinary.uploader.upload(file.tempFilePath,{
         folder:"exercise"
       });

       console.log(result)

       res.json({
        success:true,
        message:"The image is uploaded sucessfully to cloudinary",
        data:result
       })

        }

        catch(error){
            console.log("geeting error while uploading the image to cloudinary" ,error);
        }
        
    }
    await  Uploadecloudinary();

    // make database entry
    // const folderData = await File.create({
    //     name,
    //     tag,
    //     email,
    //     imageURL

    // })

        }


    catch(error){
        console.log("error getting while uploade image to cloudinary" , error)
    }
}


module.exports = cloudUplodae;