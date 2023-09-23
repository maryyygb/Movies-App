const APIKEY = "04c35731a5ee918f014970082a0088b1";
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d183e60f91f44f9fd932a595c8654fc6&page=1";
const IMGPATH = "https://image,tmdb.org/t/p/w1280";

document.getElementById("moneyVideo").loop = true;

// async function getMovies() {
//     const resp = await fetch(APIURL);
//     const respData = await resp.json();

//     console.log(respData);

//     respData.results.forEach((movie) => {
//         const img = document.createElement("img");
//         img.src = IMGPATH + movie.poster_path;

//         document.body.appendChild(img);
//     });

//     return respData;
// }

// getMovies();