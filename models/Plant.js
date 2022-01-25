const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
	light: String,
	moisture: String,
	difficulty: String,
	image: String,
	name: String,
	scientific_name: String,
	description: String,
	purchase_link: String,
	favortie: Boolean,
});

const Plant = mongoose.model('Plant', PlantSchema);

module.exports = Plant;
