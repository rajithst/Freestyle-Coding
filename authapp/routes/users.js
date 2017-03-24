

const express = require('express');
const router = express.Router();

router.get("/register",function (req,res){
    res.send("welcome to register page");
});

router.get("",function (req,res){
    res.send("hello users");
});

module.exports = router;
