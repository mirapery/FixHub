const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    userId: { 
        type: String, 
        required: true 
    },
    fixerId: { 
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
    images: { 
        type: Array, 
        required: false 
    }
}, { timestamps: true });

module.exports =  mongoose.model("Review", reviewSchema);
