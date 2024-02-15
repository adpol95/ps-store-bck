const Games = require('./ModelOfGames');

module.exports = async function (req, res) {
    await Games
        .find()
        .exec()
        .then((resp) => {
            res.status(200).json(resp)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(`Can't find a data`)
        })

}
