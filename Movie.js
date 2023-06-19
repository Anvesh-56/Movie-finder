const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c854f9fd&s="; 

 const API_URL_SEARCH = "http://www.omdbapi.com/?&apikey=c854f9fd&i="; 

 var search_input = document.getElementById("search-input"); 

 var card = document.getElementsByClassName("movie-cards")[0]; 

  

 document 

   .getElementsByClassName("search")[0] 

   .addEventListener("click", function () { 

     console.log(search_input.value); 

     const query = search_input.value; 

     if (query) { 

       getMovies(API_URL + query); 

     } 

   }); 

  

 async function getMovies(url) { 

   const resp = await fetch(url); 

   const respData = await resp.json(); 

   console.log(respData); 

   showMovies(respData.Search); 

 } 

  

 function showMovies(movies) { 

   card.innerHTML = ""; 

   if (movies) { 

     movies.forEach(async function (movie) { 

       console.log(movie.imdbID); 

       const movieData = await fetch(API_URL_SEARCH + movie.imdbID); 

       const movieDataobj = await movieData.json(); 

       console.log(movieDataobj); 

       movie_display(movieDataobj); 

     }); 

   } 

 } 

  

 function movie_display(imovie) { 

   const movieElm = document.createElement("div"); 

   movieElm.classList.add("movie-card"); 

   movieElm.innerHTML = ` 

         <div class="card"> 

             <img src="${imovie.Poster}" alt="Poster" width="300px" height="300px" /> 

             <br> 

             <div class="movie-decription"> 

                 <span class="movie-title"><b>Title</b> <span>${imovie.Title}</span></span> 

                 <span class="movie-title"><b>IMDb Rating</b> <span>${imovie.imdbRating}</span></span> 

                 <span class="movie-title"><b>Director</b> <span>${imovie.Director}</span></span> 

                 <span class="movie-title"><b>Release Date</b> <span>${imovie.Released}</span></span> 

                 <span class="movie-title"><b>Genre</b> <span>${imovie.Genre}</span></span> 

             </div> 

         </div> 

     `; 

   card.appendChild(movieElm); 

 }
