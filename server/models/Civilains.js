var mongoose = require('mongoose');

var VillainSchema = new mongoose.Schema({
	name: String,
	height: Number
});

var CivillainModel = mongoose.model('Civillain', CivilainSchema);

module.exports = CivillainModel;