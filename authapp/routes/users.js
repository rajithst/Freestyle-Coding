

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const passport =require('passport');

router.post("/register",function (req,res){

    const newUser = new User({

        username:req.body.username,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });

    User.saveUser(newUser,function (err,user) {
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(user){
            res.json({state:true,msg:"data  inserted"});
        }

    });
});

router.post("/login",function (req,res){

    const email = req.body.email;
    const password = req.body.password;

    User.findByEmail(email,function (err,user) {
        if(err) throw err;

        if (!user){
            res.json({state:false,msg:"No user found"});

        }

        User.passwordCheck(password,user.password,function (err,match) {
            if (err) throw  err;

            if (match){

                const token = jwt.sign(user, config.secret,{expiresIn:86400});
                res.json(
                    {
                        state:true,
                        token:"JWT " + token,
                        user:{
                            id:user._id,
                            name:user.name,
                            username:user.username,
                            email:user.email

                        }
                    }
                    )
            }else {
                res.json({state:false,msg:"password does not match"});
            }

        });

    });


});


router.get('/profile', passport.authenticate('jwt', { session: false}), function(req, res) {
        res.json({user:req.user});
    }
);



module.exports = router;
