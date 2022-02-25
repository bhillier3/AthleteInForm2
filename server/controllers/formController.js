const asyncHandler = require('express-async-handler')

const Form = require('../models/FormModel')

const getForms = asyncHandler(async (req, res) =>{
  const forms = await Form.find()

  res.status(200).json(forms)
})

const getForm = asyncHandler(async (req, res) => {
  const form = await Form.findById(req.params.id)

  if (!form) {
    res.status(400)
    throw new Error('Form not found')
  }

  res.status(200).json(form)
})

const setForm = asyncHandler(async (req, res) => {
  // handle errors here
  if(!req.body.athlete) {
    res.status(400)
    throw new Error('Please assign an athlete to the form')
  }

  if(!req.body.pain) {
    res.status(400)
    throw new Error('Please choose pain value')
  }

  // create form
  const newForm = await Form.create(req.body)
  
  res.status(200).json(newForm)
})

const updateForm = asyncHandler(async (req, res) => {
  const form = await Form.findById(req.params.id)

  if (!form) {
    res.status(400)
    throw new Error('Form not found')
  }

  const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, {
    new: true, 
  })

  res.status(200).json(updatedForm)
})

const deleteForm = asyncHandler(async (req, res) => {
  const form = await Form.findById(req.params.id)

  if (!form) {
    res.status(400)
    throw new Error('Form not found')
  }

  await form.remove()

  res.status(200).json({ id: req.params.id })

})

module.exports = {
  getForms,
  getForm,
  setForm,
  updateForm,
  deleteForm,
}