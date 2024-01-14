const homeRouter = require('../home/Routes');
const listingRoute = require('../products/Routes');
const newsRoute = require('../news/Routes');

module.exports = function (app) {
    app.use('/', homeRouter)
    app.use('/products', listingRoute)
    app.use('/news', newsRoute)
}

