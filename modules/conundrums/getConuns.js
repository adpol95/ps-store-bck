const cununModel =  require('./Model');

module.exports = function (req, res) {
    cununModel
        .find(undefined, req.body.type)
        .exec()
        .then((resp) => {
            res.status(200).json(resp)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(`Can't find a data`)
        })
}