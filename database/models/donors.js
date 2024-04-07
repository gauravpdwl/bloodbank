const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required:true
  },
  age: {
    type: Number,
    min: 1, // Optional: set minimum age if needed
  },
  bloodGroup: {
    type: String,
    required:true
  },
  contactNo: {
    type: String,
    required:true
    // You can add validation for phone number format here (optional)
  },
  emailid: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true, // Sets default availability to true
  },
});

module.exports = mongoose.model('Donors', donorSchema);
