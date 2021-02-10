const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  dateBirth: String,
  genere: String,
  country: String,
  state: String,
  city: String
})

module.exports = mongoose.model('user', UserSchema);