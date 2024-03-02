const Router = require('express');
const getIt = require('./getConuns');


const router = Router();

router.post('/', getIt);


module.exports = router;