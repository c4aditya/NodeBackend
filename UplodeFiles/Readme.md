# Uploading the file like image ,video in to any media management services like cloudnery.

# file structure 

congfig connect two files 
1 - databse.js
2 - cloudnary.js

# what to do - 

there is an route like /uploadeImage ,//uploadeVideo ,  then step 1 - make entry in the database 
step 2 - uploade to the cloudnery

/imagereducerUploade -> uploade image with quality image 

/localfileuploade ->here we directly store the image into server.

# in cloudnery file the image will store like 

client -----> server -----> [the image is store in temp folder]------>mediaserver 

# cloudnery is setup or code for making connection is in config file 

# There is no any way for directly make a connection with the files in express that's why we use the third pirty package like i.e - multer , express file uploade

in the porject i use express-fileuploade

# npm i express-fileupload

