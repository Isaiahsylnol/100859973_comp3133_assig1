const { buildSchema } = require("graphql");

const Schemas = buildSchema(`
type Query {
    hotels: [Hotel]
    searchHotel(hotel_name: String): Hotel
    searchByCity(city: String): Hotel
    listBookings: [Book]
  }
  
  type Mutation {
      addHotel(
        hotel_id: String!,
        hotel_name: String!,
        street: String!,
        city: String!,
        postal_code: String!,
        price: String!,
        email: String!,
        user_id: String!,
      ): Hotel

      addBooking(
          hotel_id: String!,
          booking_date: String!,
          booking_start: String!,
          booking_end: String!,
          user_id: String!,
      ): Book

      addUser(
        user_id: String!,
        username: String!,
        password: String!,
        email: String!,
    ): User
  }
  
  type Hotel {
    hotel_id: String,
    hotel_name: String,
    street: String,
    city: String,
    postal_code: String,
    price: String,
    email: String,
    user_id: String,
  }

  type Book {
      hotel_id: String,
      booking_date: String,
      booking_start: String,
      booking_end: String,
      user_id: String,
    }

    type User {
        user_id: String,
        username: String,
        password: String,
        email: String,
    }
`);

module.exports = Schemas;
