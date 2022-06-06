const TransactionModel = require("../models/transaction.model");

// get all transactions
exports.getTransactions = (req, res) => {
  // console.log("all transactions");
  TransactionModel.getAllTransactions((err, transactions) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving transactions."
      });
    } else res.send(transactions);
  }
  );
  
};
