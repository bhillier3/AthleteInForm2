const asyncHandler = require('express-async-handler')

const Athlete = require('../models/AthleteModel')

const getAthletes = asyncHandler(async (req, res) => {
  const athletes = await Athlete.find()

  res.status(200).json(athletes)
})

const getAthlete = asyncHandler(async (req, res) => {
  const athlete = await Athlete.findById(req.params.id)
  
  if (!athlete) {
    res.status(400)
    throw new Error('No athlete found')
  }

  res.status(200).json(athlete)
})

const setAthlete = asyncHandler(async (req, res) => {
  const { firstname, lastname, email } = req.body
  // handle errors here
  if(!firstname || !lastname || !email) {
    res.status(400)
    throw new Error('Please fill out all fields')
  }

  // create athlete
  const athlete = Athlete.create({
    name: firstname + ' ' + lastname,
    email,
  })

  res.status(200).json(athlete)
})

const updateAthlete = asyncHandler(async (req, res) => {
  const athlete = await Athlete.findById(req.params.id)
  
  if (!athlete) {
    res.status(400)
    throw new Error('No athlete found')
  }

  const updatedAthlete = await Athlete.findByIdAndUpdate(
    req.params.id, req.body,  {new: true }
  )

  res.status(200).json(updatedAthlete)
})

const deleteAthlete = asyncHandler(async (req, res) => {
  const athlete = await Athlete.findById(req.params.id)

  if (!athlete) {
    res.status(400)
    throw new Error('No athlete found')
  }

  await athlete.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getAthletes,
  getAthlete,
  setAthlete,
  updateAthlete,
  deleteAthlete
}