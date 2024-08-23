const mongoose = require('mongoose');

const homesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  home_type: {
    type: String,
    required: true,
    trim: true
  },
  img_url: {
    type: String,
    // required: true,
    trim: true
  },
  bedrooms: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  bathrooms: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  price: {
    type: Number,
    required: true,
  },
  price_type: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  size: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
});

module.exports = mongoose.model('homes', homesSchema);



