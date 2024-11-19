import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  itemId: { 
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
    required: false 
  },
  name: { 
    type: String, 
    required: true 
  },
  tags: { 
    type: Array, 
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
    type: Array, 
    required: false 
  },
  dateOfPublish: { 
    type: Date, 
    default: Date.now, 
    required: true 
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

export default mongoose.model("Item", itemSchema);
