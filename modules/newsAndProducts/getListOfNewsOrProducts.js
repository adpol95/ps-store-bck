const mongoose = require("mongoose");

module.exports = function (req, res) {
    const schema = require(req.body.type === "games" ? "./ModelOfGames.js" : "./ModelOfNewsOrConsOrAccess.js");
    const node = mongoose.model(req.body.type, schema);
    const nameFilter = req.body.filter ? req.body.filter.vary : null;
    node
        .find(req.body.filter ? {[nameFilter]: req.body.filter.value} : {page: req.body.index}, "title img")
        .exec()
        .then((resp) => {
            res.status(200).json(resp)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(`Can't find a data`)
        })

}
