const express=require('express');


const port=8000;
const path=require("path");


//loading db config file --> it must be done before firing express
const db = require('./config/mongoose');
//use express router

const app=express();


app.set('view engine','ejs');  //setting view engine value as EJS
app.set('views',path.join(__dirname,'views')); // __dirname=automaticall comes to view folder
app.use(express.urlencoded());  // added parser

 app.use(express.static('assets'));
 
app.use('/',require('./router'));
// catching error if any
app.listen(port,function(err){

    if(err){
        console.log(`Error in running the server:${err}`);
    }
    console.log(`Server is up and running on Port:${port}`);
});