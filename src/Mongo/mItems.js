import mongoose from 'mongoose';
import { dummyItems } from '../data.js';

const mongoURI = 'mongodb://localhost:27017/FixHub'; // Local MongoDB URI

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));

const itemSchema = new mongoose.Schema({
    itemId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    fixerId: { type: String, required: false },
    name: { type: String, required: true },
    tags: { type: Array, required: false },
    description: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: Object, required: true },
    priceRange: { type: Array, required: false },
    dateOfPublish: { type: Date, default: Date.now, required: true },
    images: { type: Array, required: false },
    isFixed: { type: Boolean, required: true },
    interested: { type: Number, required: false }
});

const Items = mongoose.model('Items', itemSchema);

// Muunna päivämäärät oikeaan muotoon
dummyItems.forEach(item => {
    if (typeof item.dateOfPublish === 'string') {
        item.dateOfPublish = new Date(item.dateOfPublish.split('/').reverse().join('-'));
    }
});

Items.insertMany(dummyItems)
    .then(() => console.log('Multiple items added successfully!'))
    .catch(err => {
        if (err.code === 11000) {
            console.error('Duplicate key error:', err.message);
        } else {
            console.error('Error adding items:', err);
        }
    });