const User = require('./Model');
const jwt = require('jsonwebtoken');

async function login(req, res) {
    const {userName, password} = req.body;
    const mongoProfile = await User.findOne({'userName': userName});
    if (!mongoProfile) res.status(400).json({message: "Nickname or password does not match"});
    else if (mongoProfile["password"] !== password) res.status(401).json({message: "Password does not match"});
    else {
        const tokenAccess = (env) => {
            return jwt.sign({mongoProfile}, process.env[env], { expiresIn: "1h"});
        }
        res.status(200).json({message: "Welcome back!", token: tokenAccess("ACCESS_TOKEN_SECRET"), refToken: tokenAccess("REFRESH_TOKEN_SECRET"), profile: mongoProfile});
    }


}

module.exports = login;
