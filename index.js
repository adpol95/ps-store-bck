const parseResponse = require('./modules/core/parseResonse');
const logger = require('./modules/core/logger');
const dbConnection = require('./modules/core/db');
const errorHandler = require('./modules/core/errorHandler');
const cors = require('./modules/core/cors');
const routes = require('./modules/core/routes');
const getProducts = require('./modules/newsAndProducts/outterDatasProducts.js');
const getNews = require('./modules/newsAndProducts/outterDatasNews.js');
const getConundrums = require('./modules/conundrums/outerDataGet.js');

const express = require('express');
const app = express();
const PORT = 5000;


logger(app);
parseResponse(app);
dbConnection(app);
cors(app);
routes(app);
errorHandler(app);

getConundrums()
    .then(() => {
        console.log('Conun for products is succeeded')
    })
    .catch((err) => {
        console.log(err);
    })
// setInterval(async () => {
getProducts()
    .then(() => {
        console.log('Request for products is succeeded')
    })
    .catch((err) => {
        console.log(err);
    })
getNews()
    .then(() => {
        console.log('Request for newsAndProducts is succeeded')
    })
    .catch((err) => {
        console.log(err);
    })
// }, 25920000)


app.listen(PORT, () => {
    console.log(`Examples for host ${PORT}`)
})
