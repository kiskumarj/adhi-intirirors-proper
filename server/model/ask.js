const express = require('express')
const mongoose = require('mongoose')
const askschema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    gmail: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, default: Date.now }
  });
  
  const ask = mongoose.model('ask', askschema);
  
  

  const bookingSchema = new mongoose.Schema({  
    name: { type: String, required: true },

    phoneNumber: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  });
const book = mongoose.model('book',bookingSchema)
module.exports = {ask,book}