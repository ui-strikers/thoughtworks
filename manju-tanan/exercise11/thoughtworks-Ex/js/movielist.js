var movies = (function(movies){
    movies.createList = (movies) => {
        let node = dom.findById("movies");
        for (let movie of movieList) {
            let div = dom.create('div');
            div.setAttribute('class', 'movie');

            let imageDiv = dom.create('figure');
            imageDiv.setAttribute('class', 'image');
            dom.append(div,imageDiv)

            let movieName = dom.create('header');
            movieName.setAttribute('class', 'name');

            let h2 = dom.create('h2');
            h2.appendChild(document.createTextNode(movie.title));
            dom.append(movieName,h2);
           
            let p = dom.create('p');
            p.appendChild(document.createTextNode(movie.year + '-' + movie.genres));
            movieName.appendChild(p);
            dom.append(div,movieName)
            div.appendChild(movieName);

            events.register(div,'click',() => { this.movies.movieClick(movie); });
            node.appendChild(div);
        }
    }

    movies.movieClick = (movie) => {
        var title = dom.findById('title');
        title.innerHTML = movie.title;
        var year = dom.findById('year');
        year.innerHTML = movie.year;
        var genres = dom.findById('genres');
        genres.innerHTML = movie.genres;
        var release = dom.findById('release');
        release.innerHTML = movie.releaseDate;
        var rating = dom.findById('rating');
        rating.innerHTML = movie.rating;
        var actors = dom.findById('actors');
        actors.innerHTML = movie.actors;
        this.movies.updateName(movie);
    }
    movies.updateName = (movie) => {
        var title = dom.findById('movie-name');
        title.innerHTML = movie.title;
        var genres = dom.findById('movie-genres');
        genres.innerHTML = movie.genres;
        
    }
    return movies;
})(movies || {})

movies.createList(movieList);



