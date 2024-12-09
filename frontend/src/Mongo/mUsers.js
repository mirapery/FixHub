import mongoose from 'mongoose';
import { dummyUsers } from '../data.js';

const mongoURI = 'mongodb://localhost:27017/FixHub'; // Local MongoDB URI

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: false },
    creationTime: { type: Date, default: Date.now, required: true },
    location: { type: Object, required: true },
    favouriteFixers: { type: Array, required: false },
    isFixer: { type: Boolean, required: true },
    about: { type: String, required: false },
    reviewCount: { type: Number, required: false }
});

const Users = mongoose.model('users', userSchema);

dummyUsers.forEach(user => {
    if (typeof user.creationTime === 'string') {
        user.creationTime = new Date(user.creationTime.split('/').reverse().join('-'));
    }
});

Users.insertMany(dummyUsers)
    .then(() => console.log('Multiple users added successfully!'))
    .catch(err => {
        if (err.code === 11000) {
            console.error('Duplicate key error:', err.message);
        } else {
            console.error('Error adding users:', err);
        }
    });
