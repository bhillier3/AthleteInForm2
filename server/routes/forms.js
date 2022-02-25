const express = require('express');
const router = express.Router();
const {
  getForms,
  getForm,
  setForm,
  updateForm,
  deleteForm
} = require('../controllers/formController')

router.route('/').get(getForms).post(setForm)
router.route('/:id').get(getForm).put(updateForm).delete(deleteForm)

module.exports = router