import mongoose from 'mongoose';
import { dummyReviews } from '../data.js';

const mongoURI = 'mongodb://localhost:27017/FixHub'; // Local MongoDB URI
console.log('MONGO_URI:', mongoURI); // Debugging line

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));

const reviewSchema = new mongoose.Schema({
    reviewId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    fixerId: { type: String, required: true },
    itemId: { type: String, required: true },
    score: { type: Number, required: true },
    message: { type: String, required: false },
    date: { type: Date, default: Date.now, required: true },
    images: { type: Array, required: false }
});

const Reviews = mongoose.model('Reviews', reviewSchema);

Reviews.insertMany(dummyReviews)
    .then(() => console.log('Multiple reviews added successfully!'))
    .catch(err => console.error('Error adding reviews:', err));