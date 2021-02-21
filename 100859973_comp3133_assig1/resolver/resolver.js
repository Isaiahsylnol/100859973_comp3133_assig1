const Hotel = require("../models/hotelModel");
const Booking = require("../models/bookModel");
const User = require("../models/userModel");

const resolvers = {
  hotels: () => {
    return Hotel.find({});
  },

  searchHotel: (args) => {
    return Hotel.findOne({ hotel_name: args.hotel_name });
  },

  searchByCity: (args) => {
    return Hotel.findOne({ city: args.city });
  },

  addHotel: (args) => {
    let hotel = new Hotel({
      hotel_id: args.hotel_id,
      hotel_name: args.hotel_name,
      street: args.street,
      city: args.city,
      postal_code: args.postal_code,
      price: args.price,
      email: args.email,
      user_id: args.user_id,
    });
    hotel.save();
    return hotel;
  },

  listBookings: () => {
    return Booking.find({});
  },

  addBooking: (args) => {
    let booking = new Booking({
      hotel_id: args.hotel_id,
      booking_date: args.booking_date,
      booking_start: args.booking_start,
      booking_end: args.booking_end,
      user_id: args.user_id,
    });
    booking.save();
    return booking;
  },

  addUser: (args) => {
    let user = new User({
      user_id: args.user_id,
      username: args.username,
      password: args.password,
      email: args.email,
    });
    user.save();
    return user;
  },
};

module.exports = resolvers;
