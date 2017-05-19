const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Client = require('node-rest-client').Client;
const client = new Client();

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.post('/getLocations',(req,res)=>{
    console.log(req.body.city)
     client.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+req.body.city+"+nearby+places&key=AIzaSyD1wsxf68A21P1FVZyMBeop5X3io-2MH_E", function (data, response) {
      console.log(data)
      res.json({msg:true,data:data});
     });

})


app.listen(3001,()=>{
    console.log("listening to port")
})