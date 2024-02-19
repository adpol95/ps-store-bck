const homeRouter = require('../home/Routes');
const newsOrProdRoute = require('../newsAndProducts/Routes');
const authRoute = require('../authorization/Router');

module.exports = function (app) {
    app.use('/', homeRouter)
    app.use('/newsAndProducts', newsOrProdRoute)
    app.use('/authorization', authRoute)
}

