const News = require('./Model');
const jsdom = require("jsdom");

module.exports = async function () {
    const {JSDOM} = jsdom;
    const newsContainer = [
        "ps5",
        "ps-vr2",
        "ps4",
        "ps-store",
        "ps-plus"
    ]
    const mongoHasDatas = await News.find();
    if (!!mongoHasDatas[0] === false) { //
        for (const elem of newsContainer) {
            for (let i = 1; i < 3; i++) {
                const firstTake = await fetch('https://blog.playstation.com/category/' + elem + '/page/' + i + '/');
                const htmlText = await firstTake.text();
                const dom = await new JSDOM(htmlText).window.document;
                const titles = dom.getElementsByClassName("post-card__title-link");
                const domens = dom.getElementsByClassName("post-card__image-link");
                const readyNews = [];
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
                    readyNews.push({
                        titleTop: titles[j].textContent,
                        dataTime: domInTheNews.getElementsByClassName("entry-date published")[0].textContent,
                        topImg: allImgs.shift(),
                        headerTitle: domInTheNews.getElementsByClassName("post-single__sub-header-text")[0].textContent,
                        authorName: domInTheNews.getElementsByClassName("author-name")[0].textContent,
                        authorDescription: domInTheNews.getElementsByClassName("author-description")[0].textContent,
                        mainImgs: allImgs,
                        mainText: mainTextProperNodes.map(el => [el.nodeName, el.textContent]),
                    })
                }
                const news = new News({
                    title: elem + "page" + i,
                    value: readyNews
                })
                await news
                    .save()
                    .then(() => {
                        console.log('News is updated');
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }

    } else
        console.log("News is already updated")
}
