# Backed Basics 

 # 1- client and server interection or model 

it's simply means that the cline send a request to the server and then server responce to the particular request as give some responce 

# HTTPS :-
HTTPS stands for Hypertext Transfer Protocol Secure. It is the secure version of HTTP, using encryption to protect the data transmitted between a web browser and a website. This encryption ensures that sensitive information like login details or credit card numbers are not intercepted or altered by unauthorized parties, according to Fortinet. 

# HTTPS Request 

1- GET :- Fetching some data 
2- PUT :- Updating some data
3- POST :- Submit some data
4- DELETE :- Deleting Some data 

# idempotent 

The idempotemt means no matter how many times you mase a same request the responce will same

There are some Methods are idempotent 
1- GET , PUT 

# Server creaction 

we create the server with the help of Express Js  
Express is a framework of nodejs which help us to create the server side application and API's


# Creating a backend application 

1- npm init -y 
2- npm i express
3 - create server.js or index.js and we have to write all code inside this folder


# middleware

Basically middle ware is work in the middle of request and responce if there are any issue in the request body then it through an error but if there is no issue in request body then it move to the logics or controller of the paricular route. middle ware will also check the validation,varification ,auth.

there are many types of middleware and all have diffrent work

for ex - body-parser middle ware 
      it conver the json data to js object