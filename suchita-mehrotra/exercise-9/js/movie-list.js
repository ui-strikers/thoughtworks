const movieListNode = dom.findByClass('movie-list')[0];

var displayList = () =>{
	movieList.map(function(movies){
     let section = dom.create('section');
   		dom.addClass(section,'movielist');
   		events.register(section,'click',function(){
               dom.findByClass('movie-title')[0].innerHTML=movies.title;
               dom.find('.movie-name p')[0].innerHTML = movies.genres;
               let keys = Object.keys(movies);	
		       var keyIdx = 0;
		       var spanarray = dom.find('.movie-info ul span');
		       spanarray.forEach((span) => {
			span.innerHTML = movies[keys[keyIdx]];
			keyIdx++;
		});
                         });
		dom.append(movieListNode,section);
		section.style.position='relative';
	 let figure= dom.create('figure');
	    dom.append(section,figure);
	 let img= dom.create('img');
	    dom.append(figure,img);  
	 let span = dom.create('span');
	    dom.append(section,span); 
	    span.innerHTML =movies.title;
	    dom.addClass(span,'leftSpan');
	 let p= dom.create('p'); 
	    dom.append(span,p);  
	    p.innerHTML = movies.year+ "  -  " + movies.genres;
	});
}

displayList(movieList);

var displayDetail = (movie) => {
var array = dom.find('.movie-detail ul span');				
		let keys = Object.keys(movie);	
		var keyIdx = 0;
		array.forEach((span) => {
			span.innerHTML = movie[keys[keyIdx]];
			keyIdx++;
		});
	};

displayDetail(movieList);