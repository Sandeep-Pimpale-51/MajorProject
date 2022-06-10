const { Router } = require('express');
const express=require('express');

//loading db config file --> it must be done before firing express
const db = require('../config/mongoose');

//loading Schema from Models
const tasks=require('../models/tasks');


const router=express.Router();

//loading home controller
const homeController=require('../controllers/home_Controller');
console.log('route loaded');

//setting route to index page
router.get('/',homeController.home);
router.use('/action',require('./action'));

module.exports=router;