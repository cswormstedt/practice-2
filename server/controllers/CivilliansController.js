var express= require('express');
var router = express.Router();
var Civillains = require('../models/Civillains');

router.get('/', function(req, res){
	console.log('hi');
	res.render("success");
})
