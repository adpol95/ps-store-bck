const parseResponse = require('./modules/core/parseResonse');
const logger = require('./modules/core/logger');
const dbConnection = require('./modules/core/db');
const errorHandler = require('./modules/core/errorHandler');
const cors = require('./modules/core/cors');
const routes = require('./modules/core/routes');
const getProducts = require('./modules/products/outterDatas');
const getNews = require('./modules/news/outterDatas');


const express = require('express');
const app = express();
const PORT = 5000;


logger(app);
parseResponse(app);
dbConnection(app);
cors(app);
routes(app);
errorHandler(app);

getProducts()
    .then(() => {
        console.log('Request for products is succeeded')
    })
    .catch((err) => {
        console.log(err);
    })
getNews()
    .then(() => {
        console.log('Request for news is succeeded')
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(PORT, () => {
    console.log(`Examples for host ${PORT}`)
})
