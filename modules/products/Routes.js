const Router = require('express');
const getGames = require('./getGames');
const getAcccessories = require('./getAccessories.js');
const getConsoles = require('./getConsoles');
const getAll = require('./dataGetAll');

const router = Router();

router.get('/', getAll)
router.post('/games', getGames)
router.get('/accessories', getAcccessories)
router.get('/consoles', getConsoles)

module.exports = router;