// models/Form.js

const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
  athlete: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Athlete',
    required: true
  },
  date: { 
    type: Date,
    default: Date.now,
  },
  pain: {
    type: Number,
    required: true,
  },
  treament_req: Boolean,
  treatment_want: String,
  inj_notes: String,
  recovery: Array,
  activities: Array,
  status: Number // STATUS: {0: new / not viewed, 1: in-progress, 2: completed}
});

module.exports = mongoose.model('Form', formSchema);