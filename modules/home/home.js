const jsdom = require("jsdom");
module.exports = async function (req, res) {
    await res.status(200).json("DOM");
}