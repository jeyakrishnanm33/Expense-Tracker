const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect('mongodb+srv://jaikrissh04:Kannan%40312@cluster0.q7wmh2j.mongodb.net/test1');
        console.log('Expense database connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectdb;
