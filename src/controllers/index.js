const express = require('express');
const router = express.Router();
const home = require('./home');
const select = require('./select');
const results = require('./results');
const itemsbysupermarket = require('./itemsbysupermarket');
const error = require('./error');

router.get('/', home.get);
router.get('/select', select.get);
router.get('/results', results.get);
router.get('/itemsbysupermarket', itemsbysupermarket.get);


//test 500 route in test mode only
if (process.env.NODE_ENV === "test") {
    const dummy = require('./dummy');
    router.get('/dummy', dummy.get);
}
router.use(error.client);
router.use(error.server);

module.exports = router;