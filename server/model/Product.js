const mongoose = require('mongoose');
const express = require('express')
const productSchema = new mongoose.Schema({
  addimage: {
    type: String,
    required: true,
  },
  modelno: {
    type: String,
    required: true,
  },
  dimentions:{
    type: String,
    required: true,
  },
  madeupof:{
    type: String,
    required: true
  },
  warrantyId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'warranty',
    required: true
  },

  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  subcategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true,
  },
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
