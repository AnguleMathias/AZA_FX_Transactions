const TransactionModel = require("../models/transaction.model");

// get all transactions
exports.getTransactions = (req, res) => {
  TransactionModel.getAllTransactions((err, transactions) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving transactions.",
      });
    } else res.send(transactions);
  });
};

// create new transaction
exports.createTransaction = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
  }

  const transactionData = new TransactionModel(req.body);

  // Save Transaction in the database
  TransactionModel.createTransaction(transactionData, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Transaction.",
      });
    else res.send(data);
  });
};

// get transaction by id
exports.getTransactionById = (req, res) => {
  TransactionModel.getTransactionById(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error retrieving Transaction with id: " + req.params.id,
      });
    } else if (data.length === 0) {
      res.status(404).send({
        message: `Transaction not found with id ${req.params.id}`,
      });
    } else res.send(data);
  });
};
