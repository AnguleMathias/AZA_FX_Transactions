const express = require("express");

// create express app
const app = express();

// set port, listen for requests
const port = process.env.PORT || 6000;

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Microservice to store FX transactions");
});

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
