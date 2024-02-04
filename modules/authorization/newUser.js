const User = require('./Model');

function newUser(req, res) {
    const mongoUser = new User({
        userName: req.body.userName,
        password: req.body.password,
        country: req.body.country,
        avatar: req.body.avatar,
        birthDay: req.body.birthDay,
    });



    mongoUser
        .save()
        .then(() => {
            res.status(200).json("Account created")
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Error')
        })
}

module.exports = newUser;