const APIKEY = "04c35731a5ee918f014970082a0088b1";
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d183e60f91f44f9fd932a595c8654fc6&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


// getting from the ejs
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// initially get favorites movies
getMovies(APIURL);


// fetching data from the api
async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    
    showMovies(respData.results);

}

function showMovies(movies){
    // clear main
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");


        // html/ejs to show in the webpage

        movieEl.innerHTML = `
    <img 
    src="${IMGPATH + poster_path}"
    alt="${title}"
    />

        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getCLassByRate(vote_average)}">${vote_average}</span>
        
    </div>
    <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

        main.appendChild(movieEl);

    });
}

function getCLassByRate(vote){
    if(vote >= 8) {
        return 'green';
    } else if(vote >= 5){
        return 'orange'
    } else {
        return 'red';
    }
}


// for search feature

form.addEventListener('submit', (e) => {
    e.provenDefault();

    const searchTerms = search.value;


    // making the search working
    if(searchTerms) {

        getMovies(SEARCHAPI + searchTerms);

        search.value = " ";

    }
});