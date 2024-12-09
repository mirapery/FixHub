const mongoose = require('mongoose');
const { DB_URI } = require('./config.js');
const process = require('node:process');

// PLACEHOLDER connection script - replace later
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log('Connected to the database');
    } catch (error) {
        console.error('Failed to connect to the database', error);
        process.exit(1);
    }
};

module.exports = connectDB;