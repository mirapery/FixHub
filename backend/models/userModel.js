const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  userId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  userName: { 
    type: String, 
    required: true, 
    unique: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true, 
    unique: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.']
  },
  password: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String, 
    required: false 
  },
  creationTime: { 
    type: Date, 
    default: Date.now, 
    required: true 
  },
  location: { 
    type: Object, 
    required: true 
  },
  favouriteFixers: { 
    type: Array, 
    required: false 
  },
  isFixer: { 
    type: Boolean, 
    required: false 
  },
  about: { 
    type: String, 
    required: false 
  },
  reviewCount: { 
    type: Number, 
    required: false 
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
