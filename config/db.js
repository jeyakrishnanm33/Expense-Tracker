const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        console.log('Expense database connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectdb;
