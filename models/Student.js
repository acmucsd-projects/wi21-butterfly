const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  college: {
    type: String,
    required: false
  },
  birthday: {
    type: Date,
    required: false
  }
});

module.exports = Student = mongoose.model('student', StudentSchema);