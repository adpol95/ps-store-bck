const News = require('./Model');
const jsdom = require("jsdom");

module.exports = async function () {

    const newsList = [];
    const {JSDOM} = jsdom;

    const mongoHasDatas = await News.find();
    if (!!mongoHasDatas[0] === false) {

        for (let i = 1; i < 2; i++) {
            const firstTake = await fetch('https://blog.playstation.com/' + i + '/');
            const htmlText = await firstTake.text();
            const dom = await new JSDOM(htmlText).window.document;
            console.log(i);
            const titles = dom.getElementsByClassName("post-card__title-link");
            const images = dom.getElementsByClassName("post-card__featured-asset");
            const domens = dom.getElementsByClassName("post-card__image-link");
            const readyNews = [];
            for (let j = 0; j < titles.length; j++) {
                const inTheNews = await (await fetch(domens[j].href)).text();
                const domInTheNews = await new JSDOM(inTheNews).window.document;
                const allImgs = [...domInTheNews.getElementsByClassName("article-main-section")[0].getElementsByTagName("img")].map(el => el.src);
                readyNews.push({
                    title: titles[j],
                    listImg: images[j].childNodes[1].src,
                    dataTime: domInTheNews.getElementsByClassName("entry-date published")[0].textContent,
                    topImg: allImgs.shift(),
                    headerTitle: domInTheNews.getElementsByClassName("post-single__sub-header-text")[0].textContent,
                    authorName: domInTheNews.getElementsByClassName("author-name")[0].textContent,
                    authorDescription: domInTheNews.getElementsByClassName("author-description")[0].textContent,
                    mainImgs: allImgs,
                    mainText: domInTheNews.getElementsByClassName("post-single__content single__content entry-content")[0].textContent,
                })
            }
            newsList.push(readyNews)
        }
        const news = new News({
            news: newsList,
        })
        await news
            .save()
            .then(() => {
                console.log('News is updated');
            })
            .catch((err) => {
                console.log(err);
            })
    } else console.log("News is already updated")
}
