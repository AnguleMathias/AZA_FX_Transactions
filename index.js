const express = require("express");

// create express app
const app = express();

// set port, listen for requests
const port = process.env.PORT || 3333;

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Microservice to store FX transactions");
});

// import transaction routes
const transactionRoutes = require("./src/routes/transaction.route");

// create transaction routes
app.use("/transactions", transactionRoutes);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
