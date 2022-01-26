const { insertMany } = require('./models/Plant');
const mongoose = require('./connection');
const seedData = require('./seed.json');
const Plant = require('./models/Plant');

Plant.deleteMany({})
	.then(() => {
		Plant.deleteMany({});
	})
	.then(() => {
		Plant.insertMany(seedData).then((plant) => {
			console.log('We have plants!🌿 🌱');
			console.log(plant);
			process.exit();
		});
	})

	.catch((err) => console.error(err));
