/**
 * Created by Rajith Thennakoon on 6/25/2017.
 */


var mysql = require('mysql');
var db;
var settings = {

    host:"localhost",
    user:"root",
    password:"",
    database:"crudapp"

};

function connectDatabase() {

    if (!db){
        db = mysql.createConnection(settings);

        db.connect(function (err) {

            if(!err){
                console.log("Database connceted");
            } else {

                console.log("Error database connection")
            }
        })
    }

    return db;
}

module.exports = connectDatabase();
