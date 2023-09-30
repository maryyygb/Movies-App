// all the functions that we want to test

// example
const functions = {
    add:(num1, num2) => num1+num2,

};



// fetching data from the api

// 1
async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    
    showMovies(respData.results);

};

// 2
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

module.exports = functions;