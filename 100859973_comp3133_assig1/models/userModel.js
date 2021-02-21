const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter valid username"],
    unique: [true, "Duplicate username Not allowed"],
    trim: true,
    lowercase: true,
    minLength: 4,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Duplicate Email Not allowed"],
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
    unique: [true, "Duplicate ID not allowed"],
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

module.exports = new mongoose.model("User", userSchema);
