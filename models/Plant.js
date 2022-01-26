const mongoose = require('../connection');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
	light: String,
	moisture: String,
	difficulty: String,
	image: String,
	name: String,
	scientific_name: String,
	description: String,
	purchase_link: String,
	favorite: Boolean,
});

const Plant = mongoose.model('Plant', PlantSchema);

module.exports = Plant;
