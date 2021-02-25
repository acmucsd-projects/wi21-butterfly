const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

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

// @route POST api/students/login
// @desc Login student and return JWT token
// @access Public
router.post("/students/login", (req, res) => {
    // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;

  // Find student by email
  Student.findOne({ email }).then(student => {
      // Check if student exists
      if (!student) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }

  // Check password
      bcrypt.compare(password, student.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: student.id,
            name: student.name
          };
          
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
});

// @route POST api/students/register
// @desc Register student
// @access Public
router.post("/students/register", (req, res) => {
    
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Student.findOne({ email: req.body.email }).then(student => {
      if (student) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newStudent = new Student({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newStudent.password, salt, (err, hash) => {
            if (err) throw err;
            newStudent.password = hash;
            newStudent
              .save()
              .then(student => res.json(student))
              .catch(err => console.log(err));
          });
        });
      }
    });
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