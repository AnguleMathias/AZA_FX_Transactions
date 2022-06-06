const mysql = require("mysql2");

// create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "password",
  database: "aza_fx_transactions_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connection established!!");
});

module.exports = connection;
