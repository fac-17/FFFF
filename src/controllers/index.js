const express = require('express');
const router = express.Router();
const home = require('./home');
const select = require('./select');

router.get('/', home.get);
router.get('/select', select.get);

module.exports = router;