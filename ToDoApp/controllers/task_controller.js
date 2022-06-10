const { request } = require("express");
const Task = require("../models/tasks");

module.exports.task=function(req,res){

    let newDate;
    // if no date is selected
    if(req.body.date.length == 0){
        newDate = 'No Deadline'
    }
    // If date is selected, this will convert the date to required format
    else{
        let temp = req.body.date;
        let date = temp.substring(8, 10);
        let mon = temp.substring(5, 7);
        let year = temp.substring(0, 4);

        if(date[0] == '0'){
            date = date.substring(1);
        }
        if(mon[0] == '0'){
            mon = mon.substring(1);
        }

        let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        newDate = "" + months[mon-1] + " " + date + ", " + year;
    }
    // console.log(req.body);
    //  to create a record --> we can use req.body instead of single elements.
    Task.create(
    {
        description : req.body.description,
        category : req.body.category,
        date : newDate
    },function(err,newTask){                 //taking result(created record) 
            if(err){console.log('error in creating a task: ',err);  
            return;}
            
            console.log('********',newTask);
            return res.redirect('back');
        }
    )
}

module.exports.delete = function(req, res){
    // If user haven't selected any task to delete
    if(req.body.id == undefined){
        console.log("User haven't selected any task to delete");
        return res.redirect('back');
    }
    // If only one task is to be deleted
    else if(typeof(req.body.id) == 'string'){
        Task.findByIdAndDelete(req.body.id, function(err){
                if(err){
                    console.log("error deleting task ");
                    return;
                }
                return res.redirect('back');
            });
    }
    // If multiple tasks are to be deleted
    else{
        for(let i of req.body.id){
            Task.findByIdAndDelete(i, function(err){
                if(err){
                    console.log("error deleting tasks ");
                    return;
                }
            });
        }
        return res.redirect('back');
    }
};