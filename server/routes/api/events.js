const express = require('express');
const router = express.Router();

// Load event model
const Event = require('../../models/Event');

// @route GET api/test
// @description tests events route
// @access Public
router.get('/events/test', (req, res) => res.send('event route testing!'));

// @route GET api/events
// @description Get all events
// @access Public
router.get('/events', (req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(404).json({ noeventsfound: 'No Events found' }));
});

// @route GET api/events/:id
// @description Get single event by id
// @access Public
router.get('/events/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(404).json({ noeventfound: 'No event found' }));
});

// @route GET api/events
// @description add/save event
// @access Public
router.post('/events/post', (req, res) => {
  Event.create(req.body)
    .then(event => res.json({ msg: 'event added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this event' }));
});

// @route GET api/events/:id
// @description Update event
// @access Public
router.put('/events/:id', (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body)
    .then(event => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/events/:id
// @description Delete event by id
// @access Public
router.delete('/events/:id', (req, res) => {
  Event.findByIdAndRemove(req.params.id, req.body)
    .then(event => res.json({ mgs: 'event entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such event' }));
});

module.exports = router;