const express = require('express');
const router = express.Router();

// Student model
const Buildings = require('../models/buildings');

// @route   GET /api/buildings/
// @desc    Get all buildings
// @access  Public
router.get('/', async (req, res) => {
  try {
    const buildings = await Buildings.find({});
    res.send({ buildings })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/buildings/:id
// @desc    Get a specific building
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const building = await Buildings.findById(req.params.id);
    res.send({ building });
  } catch (err) {
    res.status(404).send({ message: 'Building not found!' });
  }
});

// @route   POST /api/buildings/
// @desc    Create a building
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newBuilding = await Buildings.create({ title: req.body.title, home_type: req.body.home_type, bedrooms: req.body.bedrooms, bathrooms: req.body.bathrooms, price: req.body.price, price_type: req.body.price_type, size: req.body.size, address: req.body.address, description: req.body.description });
     res.send({ newBuilding });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});

// @route   PUT /api/buildings/:id
// @desc    Update a building
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const updatedBuilding = await Buildings.findByIdAndUpdate(req.params.id, req.body);
     res.send({ updatedBuilding });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/buildings/:id
// @desc    Delete a building
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const removebuilding = await Buildings.findByIdAndRemove(req.params.id);
     res.send({ message: 'The building was removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


module.exports = router;