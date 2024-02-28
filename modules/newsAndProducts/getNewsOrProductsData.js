const mongoose = require("mongoose");

module.exports = function (req, res) {
    const gameIs = req.body.type === "games";
    const schema = require(gameIs? "./ModelOfGames.js" : "./ModelOfNewsOrConsOrAccess.js");
    const node = mongoose.model(req.body.type, schema);
    node
        .find({title: req.body.name})
        .exec()
        .then((resp) => {
            res.status(200).json(gameIs ? resp : {title: resp[0].title, img: resp[0].img, _id: resp[0]["_id"], ...resp[0].value})
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(`Can't find a data`)
        })

}
