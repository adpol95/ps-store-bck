const jsdom = require("jsdom");
const {JSDOM} = jsdom;
module.exports = async function (req, res) {
    const a = await (await fetch("https://blog.playstation.com/")).text();
    const dom = await new JSDOM(a).window.document;
    res.status(200).json(dom.getElementsByClassName("content-section lead-posts")[0].textContent);
}