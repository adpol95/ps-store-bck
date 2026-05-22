const homeRouter = require('../home/Routes');
const newsOrProdRoute = require('../newsAndProducts/Routes');
const authRoute = require('../authorization/Router');
const conundrumsRoute = require('../conundrums/Routes');
const notificationsRoute = require('../notifications/Router');

module.exports = function (app) {
    app.use('/', homeRouter)
    app.use('/newsAndProducts', newsOrProdRoute)
    app.use('/authorization', authRoute)
    app.use('/conundrums', conundrumsRoute)
    app.use('/notifications', notificationsRoute)
}

