
//display Listing data
var movies = (function (movies) {

	movies.CreateTile = (movie,index) => {
		let cardTemplate = `<div class='movie-tile' onclick='viewMovieDetails(${index})'>
								<figure>
									<img src='images/${movie.banner}'/>
								</figure>
								<figcaption>
									<h2>${movie.title}</h2>
									<h3>${movie.year} - ${movie.actors}</h3>
								</figcaption>
							</div>`;
		moviesSection.innerHTML += cardTemplate;
	}
	
	movies.displayList = () => {
		movieList.forEach(movies.CreateTile);
	};


	return movies;
	
})(movies || {});

movies.displayList();
