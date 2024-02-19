const Router = require('express');
const getListNewsOrProducts = require("./getListOfNewsOrProducts");
const getNews = require("./getNewsOrProductsData");

const router = Router();

router.post('/listOfNewsOrProducts', getListNewsOrProducts);
router.post('/page', getNews);


module.exports = router;