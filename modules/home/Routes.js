const Router = require('express');
const home = require('./home');

const router = Router();

router.get('/', home)

module.exports = router;