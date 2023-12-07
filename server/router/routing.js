const express = require('express');
const router = express.Router();
const User = require('../models/registration-schema');
require('../db/connection');
const bcrypt = require('bcryptjs');


router.get('/', (req,res)=>{
    res.send("Hello World Sanga");
});

router.post('/register', async (req,res)=>{
    const { name, email, phone, password, cpassword } = req.body;

    if(!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({error:"Some fields are missing."});
    }

    try{
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"User details already exists"});
        }
        else if(password!==cpassword){
            return res.status(422).json({error:"Passwords are not matching."});
        }
        else{
            const user = new User({name, email, phone, password, cpassword});

            const registeredUser = await user.save();

            if(registeredUser){
                res.status(201).json({message:"User registered successfully"});
            }

        }
        
    }catch(err){
        console.log(err);
    }

    
});

router.post('/login', async (req,res)=>{
    try{
        const { email, password } = req.body;

        if(!email || !password){
            res.status(422).json({err:"Some fields are missing"});
        }

        const validUser = await User.findOne({email:email});
        
        if(validUser){
            const isMatching = await bcrypt.compare(password, validUser.password);

            if(isMatching){
                const token = await validUser.generateAuthToken();
                console.log(token);
                res.cookie('login-token', token);
                
                res.status(200).json({message:`Welcome ${validUser.name}`});
            }
            else{
                res.status(400).json({err:"Invalid user credentials"});
            }
        }
        else{
            res.status(400).json({err:"Invalid user credentials"});
        }

    }catch(err){
        console.log(err);
    }
});

module.exports = router;