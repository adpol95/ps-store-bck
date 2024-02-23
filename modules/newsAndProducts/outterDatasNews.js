const schema = require('./ModelOfNewsOrConsOrAccess.js');
const mongoose = require('mongoose');
const jsdom = require("jsdom");
const Ps5 = mongoose.model('PS5', schema);
const PsVr2 = mongoose.model('Ps-Vr2', schema);
const PS4 = mongoose.model('PS4', schema);
const PsStore = mongoose.model('Ps-Store', schema);
const PsPlus = mongoose.model('Ps-Plus', schema);
module.exports = async function () {
    const {JSDOM} = jsdom;
    const newsContainer = [
        "ps5",
        "ps-vr2",
        "ps4",
        "ps-store",
        "ps-plus"
    ]
    // const mongoHasDatas = await PsPlus.find();
    // if (!!mongoHasDatas[0] === false) {
        for (const elem of newsContainer) {
            for (let i = 1; i < 3; i++) {
                const firstTake = await fetch('https://blog.playstation.com/category/' + elem + '/page/' + i + '/');
                const htmlText = await firstTake.text();
                const dom = await new JSDOM(htmlText).window.document;
                const titles = dom.getElementsByClassName("post-card__title-link");
                const domens = dom.getElementsByClassName("post-card__image-link");
                for (let j = 0; j < titles.length; j++) {
                    const inTheNews = await (await fetch(domens[j].href)).text();
                    const domInTheNews = await new JSDOM(inTheNews).window.document;
                    const allImgs = [...domInTheNews.getElementsByClassName("article-main-section")[0].getElementsByTagName("img")].map(el => el.src);
                    const textContainer = domInTheNews.getElementsByClassName("post-single__content single__content entry-content")[0];
                    const mainTextProperNodes = [...textContainer.childNodes].filter(el =>
                        el.nodeName === "P" ||
                        el.nodeName === "H2" ||
                        el.nodeName === "FIGURE" ||
                        el.nodeName === "A" ||
                        el.nodeName === "DIV");
                    const node = new (elem === "ps5" ?
                        Ps5 : elem === "ps-vr2" ?
                            PsVr2 : elem === "ps4" ?
                                PS4 : elem === "ps-store" ?
                                    PsStore : PsPlus)({
                        title: titles[j].textContent.trim(),
                        img: allImgs.shift(),
                        page: i,
                        value: {
                            titleTop: titles[j].textContent.trim(),
                            dataTime: domInTheNews.getElementsByClassName("entry-date published")[0].textContent,
                            topImg: allImgs.shift(),
                            headerTitle: domInTheNews.getElementsByClassName("post-single__sub-header-text")[0].textContent,
                            authorName: domInTheNews.getElementsByClassName("author-name")[0].textContent,
                            authorDescription: domInTheNews.getElementsByClassName("author-description")[0].textContent,
                            mainImgs: allImgs,
                            mainText: mainTextProperNodes.map(el => [el.nodeName, el.textContent]),
                        }
                    })
                    await node
                        .save()
                        .then(() => {
                            console.log("News" + " " + j + " " + elem + " " + "is updated");
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
            }
        }
   // } else console.log("All newsAndProducts already updated!")
}
