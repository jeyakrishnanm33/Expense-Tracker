const express = require('express');
const router = express.Router();
const { getExpenses, createExpense, deleteExpense, updateExpense } = require('../controllers/expenseController');

router.get('/expenses', getExpenses);
router.post('/expenses', createExpense);
router.delete('/expenses/:id', deleteExpense);
router.put('/expenses/:id', updateExpense);

module.exports = router;
