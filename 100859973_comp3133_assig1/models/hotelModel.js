const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  hotel_id: {
    type: String,
    required: [true, "A hotel ID is required "],
    trim: true,
  },
  hotel_name: {
    type: String,
    required: [true, "Please enter valid hotel name"],
    unique: [true, "Duplicate hotel not allowed"],
    trim: true,
    lowercase: true,
    minLength: 4,
  },
  city: {
    type: String,
    required: [true, "Please enter a valid city name"],
    trim: true,
    lowercase: true,
    minLength: 4,
  },
  postal_code: {
    type: String,
    required: true,
    unique: [true, "Duplicate postal code not allowed"],
    validate: function (value) {
      var postalRegex = /^\d{5}-\d{4}$/gm;
      return postalRegex.test(value);
    },
    trim: true,
    uppercase: true,
  },
  street: {
    type: String,
    required: [true, "Please enter valid Street name"],
    trim: true,
    lowercase: true,
    minLength: 4,
  },
  price: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Duplicate Email not allowed"],
    trim: true,
    uppercase: true,
    validate: function (value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    },
  },
  user_id: {
    type: String,
    required: true,
    unique: [true, "Duplicate ID Not allowed"],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

module.exports = new mongoose.model("Hotel", hotelSchema);
