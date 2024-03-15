const mongoose = require("mongoose");

module.exports = function (req, res) {
    const schema = require(req.body.type === "games" ? "./ModelOfGames.js" : "./ModelOfNewsOrConsOrAccess.js");
    const node = mongoose.model(req.body.type, schema);
    const nameFilter = req.body.filter ? req.body.filter.vary : null;
    node
        .find(req.body.filter ? {
            [nameFilter]: req.body.filter.value === "Free" ?
                0 : req.body.filter.value === "2" ?
                    {$lte: 2} : req.body.filter.value === "2-5" ?
                        {$gte: 2, $lte: 5} : req.body.filter.value === "5-10" ?
                            {$gte: 5, $lte: 10} : req.body.filter.value === "10-50" ?
                                {$gte: 10, $lte: 50} : req.body.filter.value === "50-100" ?
                                    {$gte: 50, $lte: 100} : req.body.filter.value === "1" ?
                                        {$lte: 1} : req.body.filter.value === "1-2" ?
                                            {$gte: 1, $lte: 2} : req.body.filter.value === "2-3" ?
                                                {$gte: 2, $lte: 3} : req.body.filter.value === "4-5" ?
                                                    {$gte: 4, $lte: 5} : req.body.filter.value === "5" ?
                                                        {$gte: 5} : new RegExp(req.body.filter.value, 'gi')
        } : req.body.favorite ? undefined : {page: req.body.index}, req.body.favorite ? "Developer" : "title img _id Genre Price")
        .exec()
        .then((resp) => {
            res.status(200).json(resp)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(`Can't find a data`)
        })

}
