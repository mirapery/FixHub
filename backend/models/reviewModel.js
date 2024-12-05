const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    reviewId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    userId: { 
        type: String, 
        required: true 
    },
    fixerId: { 
        type: String, 
        required: true 
    },
    itemId: { 
        type: String, 
        required: true 
    },
    score: { 
        type: Number, 
        required: true 
    },
    message: { 
        type: String, 
        required: false 
    },
    date: { 
        type: Date, 
        default: Date.now, 
        required: true 
    },
    images: { 
        type: Array, 
        required: false 
    }
}, { timestamps: true });

module.exports =  mongoose.model("Review", reviewSchema);
