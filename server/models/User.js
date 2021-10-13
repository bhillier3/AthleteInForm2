// models/User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  forms: { type: Array, default: [] }
});

module.exports = User = mongoose.model('user', UserSchema);