var express= require('express');
var router = express.Router();
var Civillains = require('../models/Civilains');

router.get('/', function(req, res){
	console.log('hi');

	var civ = new Civillains ({ name: "timmy"});
	res.send(civ);
})

module.exports = router;
