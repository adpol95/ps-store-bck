const Games = require('./ModelOfGames');

module.exports = function (req, res) {
    Games
        .find({page: req.body.index}, "title img")
        .exec()
        .then((resp) => {
            res.status(200).json(resp)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(`Can't find a data`)
        })

}
