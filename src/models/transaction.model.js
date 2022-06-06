const dbConnection = require("../../config/db.config");

const Transaction = function (transaction) {
  this.customer_id = transaction.customer_id;
  this.customer_name = transaction.customer_name;
  this.input_currency = transaction.input_currency;
  this.input_amount = transaction.input_amount;
  this.output_currency = transaction.output_currency;
  this.output_amount = transaction.output_amount;
  this.created_at = new Date();
  this.updated_at = new Date();
};

// get all transactions
Transaction.getAllTransactions = (result) => {
  dbConnection.query("SELECT * FROM transactions", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    result(null, res);
  });
};

// create new transaction
Transaction.createTransaction = (transaction, result) => {
  dbConnection.query(
    "INSERT INTO transactions SET ?",
    transaction,
    (err, res) => {
      if (err) {
        console.log("createTransaction error: ", err);
        result(null, err);
        return;
      }

      result(null, {
        status: true,
        message: "Transaction created successfully!",
        transactionId: res.insertId,
      });
    }
  );
};

module.exports = Transaction;