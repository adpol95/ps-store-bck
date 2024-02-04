const User = require('./Model');
const jwt = require('jsonwebtoken');

async function login(req, res) {

    const {userName, password} = req.body;
    const mongoProfile = await User.findOne({'userName': userName});

    if (!mongoProfile) res.status(400).json({message: "Nickname or password does not match"});
    else if (mongoProfile["password"] !== password) res.status(401).json({message: "Password does not match"});
    else {
        const accessToken = jwt.sign({exp: 3600, data: { profileName: mongoProfile.userName }}, process.env.ACCESS_TOKEN_SECRET);
        res.status(200).json({message: "Welcome back!", token: accessToken});
    }


}

module.exports = login;