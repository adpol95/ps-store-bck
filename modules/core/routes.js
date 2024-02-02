const homeRouter = require('../home/Routes');
const listingRoute = require('../products/Routes');
const newsRoute = require('../news/Routes');
const authRoute = require('../authorization/Router');

module.exports = function (app) {
    app.use('/', homeRouter)
    app.use('/products', listingRoute)
    app.use('/news', newsRoute)
    app.use('/authorization', authRoute)
}

