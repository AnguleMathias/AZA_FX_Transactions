const express = require("express");
const router = express.Router();

const transactionController = require("../controllers/transaction.controller");

// get all transactions
router.get("/", transactionController.getTransactions);

module.exports = router;