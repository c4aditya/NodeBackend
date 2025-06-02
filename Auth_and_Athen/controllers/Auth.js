const bcrypt = require("bcrypt");

const model = require("../models/userModel");

const JWT = require("jsonwebtoken");

//Node js It is an token based authentications
// signup router handler 
let hashpassword;
async function signup(req, res) {

    try {

        // geting the input data 

        const { name, email, password, role } = req.body

        // check if user already exist 
        // it is an db interection

        const existing_user = await model.findOne({ email }); // findout kr ke lavo ki is data base me ko matching email hai ki nhi jo user enter kr rha haui
        if (existing_user) {
            return res.status(500).json({
                sucess: false,
                message: "User Already exist",
            })
        }

        //  hasing password 

        // isse hum try catch me use krenge kyoki ye yek hashkrne me time lg saquta hai 
        try {
            // isme basically use kr rhe hai ki kisko hash [password]krna hai aur kitne round hash krna hai [10]
            hashpassword = await bcrypt.hash(password, 10)
            console.log(hashpassword)

        }
        catch (error) {
            console.log("Getting problem while hasing the password ", error)
        }


        // now after hasing the password and check the validation like email is already exist or not now if all is good then make enrty in data base 

        // create entry on databse 
        const user = await model.create({
            name,
            email,
            password: hashpassword,
            role,
        })



        return res.status(200).json({
            sucess: true,
            message: "Signup sucessfully",

        })



    }

    catch (error) {
        console.log(error)
        return res.status(500).json({
            sucess: false,
            message: "Getting error while signup",


        })

    }
}


// login code 



async function login(req, res) {
    // step -1 make a db intrection like check user is signup or not 
    try {
        console.log("fetch the data form frontend ");
        // check user is signup or not 
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).json({
                sucess: false,
                mssage: "Fill all the Details"
            })
        }
        console.log("checking email is same or not from data base")
        const user = await model.findOne({ email })

        if (!user) {
            return res.status(404).json({
                sucess: false,
                message: "User Not found make sure you are login first"
            })
        }

        // compaire the password as enter password ]     

        try {

            console.log("compare the password ")
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            console.log("Password is match")
            // create the jwt token 
            // for JWT we nedd payloade 

            const payloade = {
                id: user._id,
                email: user.email,
                role: user.role,
               

            }

            console.log("Creating ")
            const JWT_sectate = "Aditya"
            if (isPasswordCorrect) {

                // create a token jisse ki server ko yaad rhe aur baar baar password na mange 

                let token = JWT.sign(payloade, JWT_sectate,
                    {
                        //options 
                        expiresIn: "2h",
                    }
                )



                // console.log(token)

                user.token = token
                user.password = null;



                // create a coockie
                // if we wan to create a cookei then  we have to cretae thre things
                // 1- cookie name 
                // 2- cookie data 
                // 3 - Some options 

                const options = {

                    // expire time 
                    expiresIn: Date.now() + 9 * 24 * 60 * 60 * 1000,

                    // client side se access ko rokne ke liye 

                    httpOnly: true

                }
                //  console.log(isSignup)
                res.cookie("token", token, options).status(200).json({
                    sucess: true,

                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        token: token
                    },
                    message: "The cookei is created and User logied in sucessfully  "
                })



            }
            else {
                return res.status(500).json({
                    sucess: false,
                    message: "The Password is incorect"
                })
            }



            // res.status(200).json({
            //     sucess: true,
            //     message: "You are loged in Sucessfully"
            // })
        }

        catch (error) {
            console.log(error)
            return res.status(500).json({
                sucess: false,
                message: "Internal server error "
            })
        }

        // make a databse enty 



    }



    // basically we use JWT [jason web tokens] it us used for make it if user again login into the particular webpasge then it will login automatically 




    catch (error) {
        res.status(500).json({
            sucess: false,
            message: "Internal server Error "
        })
    }

}

// compaire the password as enter password 

// make database entry for login sucessfully 

module.exports = { signup, login }
