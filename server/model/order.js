const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  modelNumber: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  customerDetails: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    inquiry: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, default:  Date.now}
  },
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

module.exports = Inquiry;
