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

const Users = mongoose.model('Users', userSchema);
const Items = mongoose.model('Items', itemSchema);
const Reviews = mongoose.model('Reviews', reviewSchema);