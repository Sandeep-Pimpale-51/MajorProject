// require the librabry
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/todo_list_db');

// aquire the connaction ( to check if it is successful)
const db= mongoose.connection; 

// error if any
db.on('error',console.error.bind(console,'Error connecting in db'));

//up and running then printing the message
db.once('open',function(){

    console.log('Succesfully connected to the Database')
});


