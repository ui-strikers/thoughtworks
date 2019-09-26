
// View Data on click
function viewMovieDetails(event){
	debugger;
	var movie_details = movieList[event];
	Object.keys(movieList);

	var movie_name = movie_details.title;
	var genres = movie_details.genres;
	var year = movie_details.year;
	var releaseDate = movie_details.releaseDate;
	var rating = movie_details.rating;
	var actors = movie_details.actors;
	var banner = movie_details.banner;

	document.getElementById('movie-name').innerHTML=movie_name;
	document.getElementById('genres').innerHTML=genres;

	var cover=document.querySelectorAll(".movie-cover img")[0];
	var miniCover=document.querySelectorAll(".title-img img")[0];
	var details=document.querySelectorAll('.details ul li span');

	cover["src"]=`images/${banner}`;
	miniCover["src"]=`images/${banner}`;

	details[0].innerHTML=movie_name;
	details[1].innerHTML=year;
	details[2].innerHTML=genres;
	details[3].innerHTML=releaseDate;
	details[4].innerHTML=rating + '/10';
	details[5].innerHTML=actors;

}