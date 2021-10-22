const express = require('express');
const router = express.Router();

// Load Athlete model
const Athlete = require('../../models/Athlete');

// TEST
router.get('/test', (req, res) => res.send('athlete route testing!'));

// GET list of all athletes
router.get('/', (req, res) => {
  Athlete.find()
    .then(athletes => res.json(athletes))
    .catch(err => res.status(404).json( { noathletesfound: 'No athletes found' }));
});

// POST create a new athlete
router.post('/', (req, res) => {
  Athlete.create(req.body)
    .then(athlete => res.json({ msg: `${athlete.firstname} ${athlete.lastname} added successfully` }))
    .catch(err => res.status(404).json({ error: 'Unable to add athlete' }));
});

// GET a single athlete with given ID
router.get('/:id', (req, res) => {
  Athlete.findById(req.params.id)
    .then(athlete => res.json(athlete))
    .catch(err => res.status(404).json({ noathletefound: 'No athlete found' }));
});

// PUT update athlete with given ID
router.put('/:id', (req, res) => {
  Athlete.findByIdAndUpdate(req.params.id, req.body)
    .then(athlete => res.json({ msg: 'Athlete updated successfully' }))
    .catch(err => res.status(404).json({ error: 'Unable to update database' }));
});

// DELETE a athlete with given ID
router.delete('/:id', (res, req) => {
  Athlete.findByIdAndRemove(req.params.id, req.body)
    .then(athlete => res.json({ msg: 'Athlete deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such athlete' }));
});

module.exports = router;