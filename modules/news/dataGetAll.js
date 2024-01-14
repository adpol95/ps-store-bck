const News = require('./Model');

module.exports = function (req, res) {
    News
        .find()
        .exec()
        .then((resp) => {
            res.status(200).json(resp[0])
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(`Can't find a data`)
        })

}
