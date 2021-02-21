const express = require('express');
const router = express.Router();

// Load student model
const Student = require('../../models/Student');

// @route GET api/students/test
// @description tests students route
// @access Public
router.get('/students/test', (req, res) => res.send('student route testing!'));

// @route GET api/students
// @description Get all students
// @access Public
router.get('/students', (req, res) => {
    Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(404).json({ nostudentsfound: 'No students found' }));
});

// @route GET api/students/:id
// @description Get single student by id
// @access Public
router.get('/students/:id', (req, res) => {
    Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(404).json({ nostudentfound: 'No student found' }));
});

// @route GET api/students
// @description add/save student
// @access Public
router.post('/students/post', (req, res) => {
    Student.create(req.body)
    .then(student => res.json({ msg: 'student added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this student' }));
});

// @route GET api/students/:id
// @description Update student
// @access Public
router.put('/students/:id', (req, res) => {
    Student.findByIdAndUpdate(req.params.id, req.body)
    .then(student => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/students/:id
// @description Delete student by id
// @access Public
router.delete('/students/:id', (req, res) => {
    Student.findByIdAndRemove(req.params.id, req.body)
    .then(student => res.json({ mgs: 'student entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such student' }));
});

module.exports = router;