const mongoose = require("mongoose");
const schema = require("./Model");

module.exports = function (req, res) {
    const node = mongoose.model(req.body.type, schema);
    node
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