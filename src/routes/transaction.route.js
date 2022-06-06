const express = require("express");
const router = express.Router();

const transactionController = require("../controllers/transaction.controller");

// get all transactions
router.get("/", transactionController.getTransactions);

// create new transaction
router.post("/", transactionController.createTransaction);

module.exports = router;