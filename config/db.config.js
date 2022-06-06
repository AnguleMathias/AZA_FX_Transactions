const mysql = require("mysql");

// create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  port: process.env.DATABASE_PORT,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

connection.connect((err) => {
  if (err) throw error;
  console.log("Database connection established!!");
});

module.exports = connection;
