const Accessories = require('./ModelOfAccessories');

module.exports = function (req, res) {
    Accessories
        .find({title: req.body.name}, "value")
        .exec()
        .then((resp) => {
            res.status(200).json(resp)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(`Can't find a data`)
        })

}
