const express = require('express');
const router = express.Router();
const {
  getAthletes,
  getAthlete,
  setAthlete,
  updateAthlete,
  deleteAthlete
} = require('../controllers/athleteController')

router.route('/').get(getAthletes).post(setAthlete)
router.route('/:id').get(getAthlete).put(updateAthlete).delete(deleteAthlete)

module.exports = router;