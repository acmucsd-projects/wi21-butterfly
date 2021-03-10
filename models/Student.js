const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: false
  },
  birthday: {
    type: Date,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  friends: [{ type : ObjectId, ref: 'student' }]
});

module.exports = Student = mongoose.model('student', StudentSchema);