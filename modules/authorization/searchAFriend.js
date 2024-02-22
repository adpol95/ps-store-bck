const User = require('./Model');
function searchAFriend(req, res) {
  User.find({userName: req.body.name})
    .exec()
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json(err))
}

module.exports = searchAFriend;