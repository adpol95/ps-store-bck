const Router = require('express');
const getAllData = require('./dataGetAll');
const ps5 = require('./getOverall');

const router = Router();

router.get('/', getAllData)
router.post('/overall', ps5)

module.exports = router;