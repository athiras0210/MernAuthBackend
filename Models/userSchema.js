const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a schema for the user data
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// Create a Mongoose model for the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
