import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';

export const signUp = async (req,res) =>{
    try {
        //getting data from collection user
        const {fullname , email , password} = req.body;

        const user =  await User.findOne({email});
        if(user){
            return res.status(400).json({message : "User already exists"});
        }
        const hashPassword = await bcryptjs.hash(password, 10);

        //storing new user data
        const createdUser = new User({
            fullname : fullname,
            email : email,
            password : hashPassword,
        });
        await createdUser.save();
        res.status(201).json({message: "User created sucessfully", user :{
            _id : createdUser._id,
            fullname : createdUser.fullname,
            email : createdUser.email,
        }});
    } catch (error) {
        console.log("Error in userController" + error.message);
        res.status(500).json({message : "internal server error"});
    }
};

export const logIn = async (req, res)=>{
   try {
       const {email, password} = req.body;
       const user = await User.findOne({email});
       const isMatch = await bcryptjs.compare(password , user.password);
       if(!user || !isMatch){
        return res.status(400).json({message : "invalid user or credentials"});
       }else{
        res.status(200).json({
            message :"Login sucessfully",
            user : {
                _id: user._id,
                fullname : user.fullname,
                email: user.email,
            },
        });
       }
   } catch (error) {
     console.log("Error in user login" + error.message);
     res.status(500).json({message : "internal server error in login"});
   }
}