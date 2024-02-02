const User = require('./Model');
function cardCreate(req, res) {
    const userN = new User({
      login: req.body.login,
      password: req.body.password,
      list: req.body.list,
      status: req.body.status
    });

    userN
      .save()
      .then(() => {
        res.status(200).json('User created')
        console.log(res);
      })
      .catch((err) => {
          console.log(err);
          res.status(400).json('Error')
      })
}

module.exports = cardCreate;