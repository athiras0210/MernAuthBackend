//import User model
const User = require('../Models/userSchema');

//import json_web_token
const jwt = require('jsonwebtoken');

//register User logic
exports.registerUser = async (req, res) => {
    console.log("Inside Register User Method");
    console.log(req.body);
    const { name, email, password} = req.body;
    console.log(name, email, password);
    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(406).json({ error: "User already registered" });
        } else {
            const registerData = new User({
                name,
                email,
                password
            });
            // Save the new user document
            await registerData.save();
            return res.status(200).json({ 'isSuccess': 'true' });
        }
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ error: "Registration failed" });
    }
}


//login logic
exports.login=async(req,res)=>{
    //accept data from the user
    const{email,password}=req.body
    try{
        //check if email and password is in db
        const existingUser=await User.findOne({email,password})
        if(existingUser){
            //creating token
            const token=jwt.sign({userId:existingUser._id},"super2024")
            console.log(token);
            //giving this to frontend
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(404).json("Invalid Email or Password")
        }
    }
    catch(error){
        res.status(500).json("Registration Failed..."+error)
    }
}
