basically iss app se hum ye chata he hai ki humara image aur videos server pe aur cloudninry pe aur database me store hoo ske 

1 - API'S call 

1 - /localfiles 
 -- is route se hum bs image apne server pe uploade krenge 

 2 - /image uploade 

 -- iss route se hume image ko uplodae krna hai cloudinary pe aur uske baad isko update krna hai databse me 

3- /videoUploade 

-- is route se bhi image uploade to the cloudniary and then make entry in the data base 

4 - /image_Reduce_uplodae 

-- is route se hum image ki quality down kr ke hum uploade krenge.

-- crearte enty to db 


----- 3 local file storage ---------------

client ------> server pe

--------Uplodae to cloudnery-------------

client ------->server ----- make entry in [temp] folder and then ---------> cloudinary pe  ------- aur uske baad temp foler se delete hoo gyaa  
