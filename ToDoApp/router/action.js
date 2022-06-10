const { Router } = require('express');
const express=require('express');

//loading db config file --> it must be done before firing express
const db = require('../config/mongoose');

//loading Schema from Models
const tasks=require('../models/tasks');


const router=express.Router();

//loading task controller
const taskController=require('../controllers/task_controller');

//setting route to create task
router.post('/create-task',taskController.task);


//setting route to delete task
router.post('/delete-task',taskController.delete);

module.exports=router;