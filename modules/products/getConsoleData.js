const Consoles = require('./ModelOfConsoles');

module.exports = function (req, res) {
    Consoles
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