const express = require('express');
const Plant = require('../models/Plant');
const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const plant = await Plant.find({});
		res.json(plant);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const plant = await Plant.findById(req.params.id);
		if (plant) {
			res.status(200).json(plant);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newPlant = await Plant.create(req.body);
		res.status(201).json(newPlant);
	} catch (error) {
		next(error);
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		const updatedPlant = await Plant.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);

		if (updatedPlant) {
			const plants = await Plant.find({});
			res.json(plants);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const deletedPlant = await Plant.findByIdAndDelete(req.params.id);
		if (deletedPlant) {
			res.status(204).json(deletedPlant);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

https: module.exports = router;
