const homeRouter = require('../home/Routes');
const listingRoute = require('../products/Routes');

module.exports = function (app) {
    app.use('/', homeRouter)
    app.use('/products', listingRoute)
}

