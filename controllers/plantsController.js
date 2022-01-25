const express = require('express');
const Plant = require('../models/Plant');
const router = express.Router();

// router.get('/', async (req, res, next) => {
// 	try {
// 		const plant = await Plant.find({});
// 		res.json(plant);
// 	} catch (error) {
// 		next(error);
// 	}
// });

// router.get('/:plants?category=fern', async (req, res, next) => {
// 	try {
// 		const plant = await Plant.findById(req.params.id);
// 		if (plant) {
// 			res.sendStatus(200).json(plant);
// 		} else {
// 			res.sendStatus(404);
// 		}
// 	} catch (error) {
// 		next(error);
// 	}
// });

// router.post('/', async (req, res, next) => {
// 	try {
// 		const newPlant = await Plant.create(req.body);
// 		res.sendStatus(201).json(newPlant);
// 	} catch (error) {
// 		next(error);
// 	}
// });

// router.put('/:id', async (req, res, next) => {
// 	try {
// 		const updatedPlant = await Plant.findByIdAndUpdate(
// 			req.params.id,
// 			req.body,
// 			{ new: true }
// 		);
// 		res.json(updatedPlant);
// 	} catch (error) {
// 		next(error);
// 	}
// });

// router.delete('/id', async (req, res, next) => {
// 	try {
// 		const deletedPlant = await Plant.findByIdAndDelete(req.params.id);
// 		if (deletedPlant) {
// 			res.sendStatus(204).json(deletedPlant);
// 		} else {
// 			res.sendStatus(404);
// 		}
// 	} catch (error) {
// 		next(error);
// 	}
// });

module.exports = router;
