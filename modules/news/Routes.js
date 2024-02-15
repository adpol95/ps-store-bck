const Router = require('express');
const getListNews = require("./getListOfNews");
const getNews = require("./getNewsData");

const router = Router();

router.post('/listofnews', getListNews);
router.post('/page', getNews);


module.exports = router;