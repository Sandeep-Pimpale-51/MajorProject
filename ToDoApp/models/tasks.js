const mongoose= require('mongoose');

//Schema for Task model
const taskSchema= new mongoose.Schema({
    description:{
        type:String,
        required : true

    },
    category:{
        type:String,
        required : true

    },
    date:{
        type:String
    }
});

const tasks = mongoose.model('tasks',taskSchema);

module.exports= tasks;