const Router = require('express');
const getListNews = require("./getListOfNews");
const getNews = require("./getNewsData");

const router = Router();

router.post('/listofnews', getListNews);
router.post('/news', getNews);


module.exports = router;