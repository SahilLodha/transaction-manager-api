const express = require('express')
const router = express.Router()
const transactionController = require('../controller/transaction.controller')

// Creating Item and Updating them ....
router.post('/',transactionController.createTransactions)
router.put('/:id', transactionController.updateTransactions)
router.post('/remove/:id', transactionController.deleteTransaction)
router.get('/', transactionController.listTransaction)
router.get('/:id', transactionController.listOne)

module.exports = router;