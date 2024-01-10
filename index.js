const parseResponse = require('./modules/core/parseResonse');
const logger = require('./modules/core/logger');
const dbConnection = require('./modules/core/db');
const errorHandler = require('./modules/core/errorHandler');
const cors = require('./modules/core/cors');
const routes = require('./modules/core/routes');
const getData = require('./modules/products/outterDatas');


const express = require('express');
const app = express();
const PORT = 5000;

logger(app);
parseResponse(app);
dbConnection(app);
cors(app);
routes(app);
errorHandler(app);
getData()
    .then(() => {
        console.log('2.Data is updated')
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(PORT, () => {
    console.log(`Examples for host ${PORT}`)
})
