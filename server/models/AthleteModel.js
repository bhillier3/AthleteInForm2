// models/Athlete.js

const mongoose = require('mongoose');

const athleteSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { 
    type: String, 
    required: true
  }
});

module.exports = mongoose.model('Athlete', athleteSchema);