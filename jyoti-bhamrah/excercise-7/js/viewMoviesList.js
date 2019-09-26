
//display Listing data
function displayData(movies) {
	ln=movies.length
	
	movies.forEach(function(movie, index){ //for each movie tile
		
			var idx=index;

			//Creating movie tile
			var mainDiv = createNode('div');
			mainDiv.setAttribute('class','movie-tile'); // Set class attribute
			
			mainDiv.addEventListener('click', function() { viewMovieDetails(idx) }); // Bind onclick event
			
			append(moviesSection,mainDiv);

			//Add node for Movie Image	
			var movieBanner = createNode('figure');
			append(mainDiv,movieBanner);
			var bannerImg = createNode('img');
			bannerImg.setAttribute('src',`images/${movie.banner}`);
			append(movieBanner,bannerImg);

			//Add node for the movie description
			var textBanner = createNode('figcaption');
			append(mainDiv,textBanner);

			var movieName = createNode('h2');
			append(textBanner,movieName);
			var movieNameContent = document.createTextNode(movie.title);
			append(movieName,movieNameContent);

			var movieType = createNode('h3');
			append(textBanner,movieType);
			var movieTypeContent = document.createTextNode(`${movie.year} - ${movie.actors}`);
			append(movieType,movieTypeContent);
			
	});
	
}