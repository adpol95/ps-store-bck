const user = require("./Model");

function deleteUser(req, res) {
  user
    .findByIdAndDelete(req.params.cardId)
    .then(() => res.status(200).json('User deleted'))
    .catch((err) => {
      console.log(err);
      res.status(400).json('User delete error');
    })
}

module.exports = deleteUser;