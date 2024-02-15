const Router = require('express');
const getListGames = require('./getListOfGames');
const getGame = require('./getGameData');
const getAcccessor = require('./getAccessorData');
const getConsole = require('./getConsoleData');
const getListAccess = require('./getListOfAccessories.js');
const getListConsoles = require('./getListOfConsoles.js');

const router = Router();

router.post('/listofgames', getListGames);
router.post('/game', getGame);
router.get('/listofaccessories', getListAccess);
router.post('/accessor', getAcccessor);
router.get('/listofconsoles', getListConsoles);
router.post('/console', getConsole);


module.exports = router;