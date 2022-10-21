function getArticleGenerator(articles) {
    let arr = articles;

    let final = function displayArticle() {
        let contentElement = document.querySelector('#content');
        let article = document.createElement('article');
        if (arr.length > 0) {
            article.textContent = arr.shift();
            contentElement.appendChild(article);
        }
    }

    return final;
}