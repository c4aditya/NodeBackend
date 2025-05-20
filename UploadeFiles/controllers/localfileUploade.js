// is controller me file uplode krna hai joo ki local file uplode 
// const file = require("../models/File_Uplodae")
// basically ye function client ke yek path se yek koye image leta hai aur server ke yek path pe rakh deta hai 
async function local_file_uploade(req ,res){
    try{
       // dheko agr hume name ya emal request ki body me se nikal lenge but jb hume file niklana hai to iske liye hume yek hireaechy ko follow krna hota hai 

        // const {name , email ,  imageURL} = req.body;

        // hume request ke body me se file nikalna hai 
        // 1 -uske kiye yek hirearchy folloe krni hoti hia 

        const file = req.files.local_image;
        console.log(file)

        // 2-  kis path pe file ko store krna chate hai 
        // storege path  =  kiss directory pe store krna hai  + useke ander file ka name mtlb isse file pe store hoga / + jo bhi image aa rha hai uska name kya hoga + extension like jpg ,png 
        // file folder khud se banani hogi 
        let store_path = __dirname + "/local_file_folder/" + Date.now() + `.${file.name.split('.')[1]}`;
        //  `.${file.name.split('.')[1]}`; ye extension add kiya ki . ke basics pe split kr de aur uke first index ko return kr de 
        //  console.log(store_path);

        // 3 - is image ko move khaa krna hai 

        file.mv(store_path , (error)=>{
            console.log(error)
        });

        res.json({
            success:true,
            message:"The image [Local file]is sucessfully send to the server "
        })

    }

    catch(error){

       console.log("Getting error while image uploade" , error);

    }
}

module.exports = local_file_uploade;