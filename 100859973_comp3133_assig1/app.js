const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
// const { buildSchema } = require("graphql");
const Schemas = require("./schema/schema");
const resolvers = require("./resolver/resolver");

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.dw4sa.gcp.mongodb.net/assign1-hotels?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log("Error", err));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schemas,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

app.listen(4000, () => {
  console.log("Server is running on PORT: 4000");
});
