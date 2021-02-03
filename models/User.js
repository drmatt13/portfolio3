const mongoose = require('mongoose');

// create mongoose schema object
const Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a first name'],
    unique: true,
    trim: true,
    maxlength: [20, 'First name can not be more then 20 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Please add a last name'],
    unique: true,
    trim: true,
    maxlength: [20, 'Last name can not be more then 20 characters']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    trim: true,
    maxlength: [20, 'Email can not be more then 20 characters']
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    unique: true,
    trim: true,
    maxlength: [50, 'Password can not be more then 50 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// The collection name for this DB is defined in the export
module.exports = mongoose.model('User', Schema);