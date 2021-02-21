const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  hotel_id: {
    type: String,
    required: [true, "Please enter valid ID"],
    unique: [true, "Duplicate ID not allowed"],
    trim: true,
  },
  booking_date: {
    type: String,
    required: true,
    validate: function (value) {
      var dateRegex = /^\d{2}-\d{2}-\d{4}$/;
      return dateRegex.test(value);
    },
  },
  booking_start: {
    type: String,
    required: true,
    validate: function (value) {
      var dateStartRegex = /^\d{2}-\d{2}-\d{4}$/;
      return dateStartRegex.test(value);
    },
  },
  booking_end: {
    type: String,
    required: true,
    validate: function (value) {
      var dateEndRegex = /^\d{2}-\d{2}-\d{4}$/;
      return dateEndRegex.test(value);
    },
  },
  user_id: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

module.exports = new mongoose.model("Booking", bookSchema);
