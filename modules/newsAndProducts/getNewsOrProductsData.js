const mongoose = require("mongoose");

module.exports = function (req, res) {
    const schema = require(req.body.type === "games" ? "./ModelOfGames.js" : "./ModelOfNewsOrConsOrAccess.js");
    const node = mongoose.model(req.body.type, schema);
    node
        .find({title: req.body.name}, req.body.type === "games" ? "" : "value")
        .exec()
        .then((resp) => {
            res.status(200).json(resp)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(`Can't find a data`)
        })

}
