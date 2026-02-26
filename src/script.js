const API_KEY = 'cf6bd892';
const API_LINK = `http://www.omdbapi.com/?apikey=${API_KEY}&s=avengers&type=movie`;
const SEARCH_API = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

const main = document.getElementById("section");
const search = document.getElementById("query");
const form = document.getElementById("form");


returnMovies(API_LINK);
function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data) {

        console.log(data.Search);
        data.Search.forEach(element => {
            
            const divCard = document.createElement('div');
            divCard.setAttribute('class', 'card');

            const divRow = document.createElement('div');
            divRow.setAttribute('class', 'row');

            const divCol = document.createElement('div');
            divCol.setAttribute('class', 'column');

            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');

            const title = document.createElement('h3');
            title.setAttribute('id', 'title');

            const center = document.createElement('center');  

            title.innerHTML = `${element.Title} (${element.Year})`;
            image.src = element.Poster !== 'N/A' ? element.Poster : 'src/media/images/poster1.png';

            center.appendChild(image);
            divCard.appendChild(center);
            divCard.appendChild(title);
            divCol.appendChild(divCard);
            divRow.appendChild(divCol);

            main.appendChild(divRow);

            /* 
            <section id = "section">
            <div class = "row">
                <div class = "column">
                    <div class = "card">
                        <center><img src = "media/images/poster1.png" class = "thumbnail"></center>
                        <h3>Movie title</h3>
                    </div>
                </div>
            </div>
            </section> */
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCH_API + searchItem);
        search.value = "";
    }
});