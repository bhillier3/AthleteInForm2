// require('../server').start();

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World! I\'ve changed!');
});

module.exports = router;