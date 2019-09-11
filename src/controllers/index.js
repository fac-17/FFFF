const express = require('express');
const router = express.Router();
const home = require('./home');
const select = require('./select');
const results = require('./results');

router.get('/', home.get);
router.get('/select', select.get);
router.get('/results', results.get);

module.exports = router;