const User = require('./Model');
function getAllUsers(req, res) {
  User.find()
    .exec()
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json(err))
}

module.exports = getAllUsers;