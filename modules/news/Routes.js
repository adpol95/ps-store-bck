const Router = require('express');
const getAllData = require('./dataGetAll');

const router = Router();

router.get('/', getAllData)

module.exports = router;