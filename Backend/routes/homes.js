const express = require('express');
const router = express.Router();

// Student model
const Homes = require('../models/homes');

// @route   GET /api/homes/
// @desc    Get all homes
// @access  Public
router.get('/', async (req, res) => {
  try {
    const homes = await Homes.find({});
    res.send({ homes })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/homes/:id
// @desc    Get a specific home
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const home = await Homes.findById(req.params.id);
    res.send({ home });
  } catch (err) {
    res.status(404).send({ message: 'Home not found!' });
  }
});

// @route   POST /api/homes/
// @desc    Create a home
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newHome = await Homes.create({ title: req.body.title, img_url: req.body.img_url, home_type: req.body.home_type, bedrooms: req.body.bedrooms, bathrooms: req.body.bathrooms, price: req.body.price, price_type: req.body.price_type, size: req.body.size, address: req.body.address, description: req.body.description });
     res.send({ newHome });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});

// @route   PUT /api/homes/:id
// @desc    Update a home
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const updatedHome = await Homes.findByIdAndUpdate(req.params.id, req.body);
     res.send({ updatedHome });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/homes/:id
// @desc    Delete a home
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const removeHome = await Homes.findByIdAndRemove(req.params.id);
     res.send({ message: 'The home was removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


module.exports = router;