const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title : {
    type : String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  tags: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: false
  },
  numPeople: {
    type: Number,
    required: false
  }
});

module.exports = Event = mongoose.model('event', EventSchema);