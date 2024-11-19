import mongoose from 'mongoose';
import { dummyUsers } from '../data.js';

/*
dotenv.config(); // Load environment variables from .env file

const mongoURI = process.env.MONGO_URI;
*/
const mongoURI = 'mongodb://localhost:27017/FixHub'; // Local MongoDB URI
console.log('MONGO_URI:', mongoURI); // Debugging line

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
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

Users.insertMany(dummyUsers)
    .then(() => console.log('Multiple users added successfully!'))
    .catch(err => console.error('Error adding users:', err));




