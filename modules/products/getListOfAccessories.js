const Accessor = require('./ModelOfAccessories');

module.exports = function (req, res) {
    Accessor
        .find({}, "title img")
        .exec()
        .then((resp) => {
            res.status(200).json(resp)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(`Can't find a data`)
        })

}
