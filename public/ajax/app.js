(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
            headers: {
                Authorization: 'Client-ID 548de1d967cfbbe529959dcf4fee1a27f58933887f3b5baec16571f087f3e401'
            }
        })
            .then(response => response.json())
            .then(addImage)
            .catch(e => requestError(e, 'image'));

        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=871d76ca9bbc4fdc9fc681976fec236d`)
            .then(response => response.json())
            .then(addArticle)
            .catch(e => requestError(e, 'article'));

        function addImage(data) {
            let htmlContent = '';
            const firstImage = data.results[0];

            if (firstImage) {
                htmlContent = `<figure>
                    <img src="${firstImage.urls.small}" alt="${searchedForText}">
                    <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
                </figure>`;
            } else {
                htmlContent = 'Unfortunately, no image was returned for your search.'
            }

            responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
        }

        function addArticle(data) {
            let htmlContent = '';
            if (data.response && data.response.docs && data.response.docs.length > 1) {
                const article = data.response.docs;
                htmlContent = '<ul>' + article.map (article => `<li class="article">
                    <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
                    <p>${article.snippet}</p>
                    </li>`
                ).join('') + '</ul>';
            } else {
                htmlContent = '<div class="error-no-article">No article available</div>';
            }
            responseContainer.insertAdjacentHTML('beforeend', htmlContent);
        }

        function requestError(e, part) {
            console.log(e);
            responseContainer.insertAdjacentHTML('beforeend', `<p class="network-warning">Oh no! There was an error making a request for the ${part}.</p>`);
        }

    });
})();
