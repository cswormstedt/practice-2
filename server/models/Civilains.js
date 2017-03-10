var mongoose = require('mongoose');

var CivillainSchema = new mongoose.Schema({
	name: String,
	
});

var CivillainModel = mongoose.model('Civillain', CivillainSchema);

module.exports = CivillainModel;