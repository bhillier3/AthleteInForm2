const express = require('express');
const router = express.Router();

// Load User model
const User = require('../../models/User');

// TEST
router.get('/test', (req, res) => res.send('user route testing!'));

// GET list of all users
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json( { nousersfound: 'No users found' }));
});

// POST create a new user
router.post('/', (req, res) => {
  User.create(req.body)
    .then(user => res.json({ msg: 'User added successfully' }))
    .catch(err => res.status(404).json({ error: 'Unable to add user' }));
});

// GET a single user with given ID
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ nouserfound: 'No user found' }));
});

// PUT update user with given ID
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.json({ msg: 'User updated successfully' }))
    .catch(err => res.status(404).json({ error: 'Unable to update database' }));
});

// DELETE a user with given ID
router.delete('/:id', (res, req) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then(user => res.json({ msg: 'User deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such user' }));
});

module.exports = router;