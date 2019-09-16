const express = require('express');
const router = express.Router();
const home = require('./home');
const select = require('./select');
const results = require('./results');
const itemsbysupermarket = require('./itemsbysupermarket');

router.get('/', home.get);
router.get('/select', select.get);
router.get('/results', results.get);
router.get('/itemsbysupermarket', itemsbysupermarket.get);

module.exports = router;