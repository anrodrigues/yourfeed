const mongoose = require('mongoose');

const GoalsSchema = new mongoose.Schema({
  name: {type: String, required: true},
  category: {type: String, required: true},
  notify: {type: Boolean, default: false},
  endDate: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  concluded: {type: Boolean, default: false},
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  actions: [{
    name: {type: String, required: true},
    endDate: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    concluded: {type: Boolean, default: false}
  }]
})

module.exports = mongoose.model('goals', GoalsSchema);