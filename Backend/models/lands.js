const mongoose = require('mongoose');

const landsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  land_type: {
    type: String,
    required: true,
    trim: true
  },
  img_url: {
    type: String,
    // required: true,
    trim: true
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

module.exports = mongoose.model('lands', landsSchema);



