const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema;

const userSchema = new Schema ({
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
  images: { 
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

userSchema.statics.signup = async function (userName, name, phone, email, password, image, location, isFixer,about) {
  if (!userName || !name || !phone || !email || !password || !location) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const userNameExists = await this.findOne({ userName });
  if (userNameExists) {
    throw Error('Username already in use');
  };
  const phoneExists = await this.findOne({ phone });
  if (phoneExists) {
    throw Error('Phone already in use');
  };
  const emailExists = await this.findOne({ email });
  if (emailExists) {
    throw Error('Email already in use');
  };

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ userName, name, phone, email, password: hash, image, location, isFixer,about});
  return user
};

userSchema.statics.login = async function(userName, password) {
  if (!userName || !password) {
    throw Error('All fields must be filled');
  };

  const user = await this.findOne({ userName });
  if (!user) {
    throw Error('Incorrect user');
  };

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error('Incorrect password');
  };

  return user;;
}

module.exports = mongoose.model("User", userSchema);
