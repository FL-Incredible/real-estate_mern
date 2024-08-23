const express = require('express');
const router = express.Router();

// Land model
const Lands = require('../models/lands');

// @route   GET /api/lands/
// @desc    Get all lands
// @access  Public
router.get('/', async (req, res) => {
  try {
    const lands = await Lands.find({});
    res.send({ lands })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/lands/:id
// @desc    Get a specific land
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const land = await Lands.findById(req.params.id);
    res.send({ land });
  } catch (err) {
    res.status(404).send({ message: 'Land not found!' });
  }
});

// @route   POST /api/lands/
// @desc    Create a land
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newLand = await Lands.create({ title: req.body.title, img_url: req.body.img_url, land_type: req.body.land_type, price: req.body.price, price_type: req.body.price_type, size: req.body.size, address: req.body.address, description: req.body.description });
     res.send({ newLand });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});

// @route   PUT /api/lands/:id
// @desc    Update a home
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const updatedLand = await Lands.findByIdAndUpdate(req.params.id, req.body);
     res.send({ updatedLand });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/lands/:id
// @desc    Delete a land
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const removeLand = await Lands.findByIdAndRemove(req.params.id);
     res.send({ message: 'The land was removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


module.exports = router;