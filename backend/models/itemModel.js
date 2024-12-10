const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  fixerId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null, 
    required: false 
  },
  name: { 
    type: String, 
    required: true 
  },
  tags: { 
    type: [String], 
    required: false 
  },
  description: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    required: true 
  },
  location: { 
    type: Object, 
    required: true 
  },
  priceRange: { 
    type: [Number], 
    required: false 
  },
  dateOfPublish: { 
    type: Date, 
    default: Date.now, 
  },
  images: { 
    type: Array, 
    required: false 
  },
  isFixed: { 
    type: Boolean, 
    required: true 
  },
  interested: { 
    type: Number, 
    required: false 
  }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);