# Uploading the file like image ,video in to any media management services like cloudnery.

# file structure 

congfig for connect two files 
1 - databse.js
2 - cloudnary.js

# what to do - 

there is an route like /uploadeImage ,/uploadeVideo ,  then step 1 - make entry in the database 
step 2 - uploade image to the cloudnery

/imagereducerUploade -> uploade image with quality image 

/localfileuploade ->here we directly store the image into server.

# in cloudnery file the image will store like 

client -----> server -----> [the image is store in temp folder]------>mediaserver[cloudenary]

# cloudnery is setup or code for making connection is in config file 

# There is no any way for directly make a connection with the files in express that's why we use the third pirty package like i.e - multer , express file uploade

in the porject i use express-fileuploade

# npm i express-fileupload


# Uploade files

too sercer.js me hume fileuploade middleware add krna hoga.

app.use(fileUploade());

and then jb hum route hit krnge to ye file uploade hoga 

# Local file uplodae 

Hume local files uploade krni hai to uske liye hum localfile controller me 3 chize chiye hongi 

1- agr hume file ko find krnihai to uske liye yek proper hirearchy hogi jo humse add krna important hai 
 const file = req.files.file;

2- Hume path ka name dena hota hai like kiss direactory pe file add krni hai to usko hum yeashai de saqute hai 

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`; 

        `.${file.name.split('.')[1]}`;  -> iska use iss liye hua hai kyo ki hume file .jpg ya png formate me chiye jisse ki image open hoo uske liye hum iska use kr rhe hai aur ye jb hum file ko console kraynge to yek object bnta hai jime ki yek name ka key hota hai usme image ka formate aur image ka name hoga us image ke formate ko pane ke liye hum is line ka use kr rhe hai bs 

3- hume move bhi krna hoga hai uke liye hum mv function likhte hai       

  file.mv(path,(err)=>{

            console.log(err)
        })

ye tin chize impotant hai jb hume local file uploade krni hogi too...





