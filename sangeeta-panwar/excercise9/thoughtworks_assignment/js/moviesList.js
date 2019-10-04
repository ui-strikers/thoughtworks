function displayData(movies) {
	ln=movies.length
	
	movies.forEach(function(movie, index){ 
		
			var idx=index;
			var mainDiv = createNode('div');
			mainDiv.setAttribute('class','movie-title'); 
			mainDiv.addEventListener('click', function() { viewDetails(idx) }); 
			append(moviesPanel,mainDiv);
			var movieBanner = createNode('figure');
			append(mainDiv,movieBanner);
			var bannerImg = createNode('img');
			bannerImg.setAttribute('src',`images/${movie.banner}`);
			append(movieBanner,bannerImg);
			
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