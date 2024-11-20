import mongoose from 'mongoose';
import { DB_URI } from './config.js';
import process from 'node:process';

// PLACEHOLDER connection script - replace later
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Failed to connect to the database', error);
        process.exit(1);
    }
};

export default connectDB;