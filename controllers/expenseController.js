const Expense = require('../models/expenseModel');

const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const createExpense = async (req, res) => {
    const { title, amount } = req.body;

    if (!title || amount === undefined) {
        return res.status(400).json({ message: 'Title and Amount are required' });
    }

    try {
        const expense = new Expense({ title, amount });
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteExpense = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedExpense = await Expense.findByIdAndDelete(id);
        if (!deletedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.json({ message: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const updateExpense = async (req, res) => {
    const { id } = req.params;
    const { title, amount } = req.body;

    if (!title || amount === undefined) {
        return res.status(400).json({ message: 'Title and Amount are required' });
    }

    try {
        const updatedExpense = await Expense.findByIdAndUpdate(
            id,
            { title, amount },
            { new: true, runValidators: true }
        );

        if (!updatedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        res.json(updatedExpense);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getExpenses, createExpense, deleteExpense, updateExpense };
