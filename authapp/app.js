

const express = require('express');
const path  = require('path');
const app = express();
const port = process.env.PORT ||3000;
const user = require('./routes/users');

app.use(express.static(path.join(__dirname,"public")));


app.use('/user',user);

app.get("/",function (req,res){
    res.send("hello world");
});



app.listen(port,function () {
    console.log("listening to port "+ port);
});