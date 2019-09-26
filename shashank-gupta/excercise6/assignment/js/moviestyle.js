
const movieList = [
    {
        title: "The Shawshank Redemption",
        year: "1994",
        releaseDate: "20-01-1994",
        rating: "9.3",
        actors: "Tim Robbins",
        genres: "Drama"
    },
    {
        title: "The Godfather",
        year: "1972",
        releaseDate: "20-01-1994",
        rating: "9.2",
        actors: "Marion",
        genres: "Drama"
    },
    {
        title: "The Dark Knight",
        year: "2008",
        releaseDate: "20-01-1994",
        rating: "9.0",
        actors: "Christian Bale",
        genres: "Drama"
    },
    {
        title: "The Godfather: Part 2",
        year: "1974",
        releaseDate: "20-01-1994",
        rating: "9.0",
        actors: "Al Pacino",
        genres: "Drama"
    },
    {
        title: "The Lord of the Rings",
        year: "2003",
        releaseDate: "20-01-1994",
        rating: "8.9",
        actors: "Elijah Wood",
        genres: "Drama"
    },
    {
        title: "Pulp Fiction",
        year: "1994",
        releaseDate: "20-01-1994",
        rating: "8.9",
        actors: "John Travolta",
        genres: "Drama"
    },
    {
        title: "Schindler's List",
        year: "1993",
        releaseDate: "20-01-1994",
        rating: "8.9",
        actors: "Liam Neeson",
        genres: "Drama"
    },
    {
        title: "12 Angry Men",
        year: "1957",
        releaseDate: "20-01-1994",
        rating: "8.9",
        actors: "Henry Fonda",
        genres: "Drama"
    },
    {
        title: "Inception",
        year: "2010",
        releaseDate: "20-01-1994",
        rating: "8.8",
        actors: "Leonardo DiCaprio",
        genres: "Drama"
    },
    {
        title: "Fight Club",
        year: "1999",
        releaseDate: "20-01-1994",
        rating: "8.8",
        actors: "Brad Pitt",
        genres: "Drama"
    },
    {
        title: "The Lord of the Rings",
        year: "2001",
        releaseDate: "20-01-1994",
        rating: "8.8",
        actors: "Elijah Wood",
        genres: "Drama"
    },
    {
        title: "Forrest Gump",
        year: "1994",
        releaseDate: "20-01-1994",
        rating: "8.8",
        actors: "Tom Hanks",
        genres: "Drama"
    }
];

// This function create to shows the movie list
(function () {

    var movieListObj = movieList;
    let showData = document.querySelectorAll(".moviesitems")[0];
    //let showData = document.getElementsByClassName("moviesitems");

    var Movie_Name; let movie_Details;
    let year; let actors;
    let genres; let rating; let releaseDate;

    // Creating dynamic element to show movie list
    for (var movieCount = 0; movieCount <= movieListObj.length - 1; movieCount++) {
        Movie_Name = movieListObj[movieCount].title;
        year = movieListObj[movieCount].year;
        genres = movieListObj[movieCount].genres;
        actors = movieListObj[movieCount].actors;
        rating = movieListObj[movieCount].rating;
        releaseDate = movieListObj[movieCount].releaseDate;

        var movieitems = createNode("sectiion");
        movieitems.setAttribute('id', movieCount);
        movieitems.setAttribute('class', 'col-md-3');
        movieitems.setAttribute('onclick', `Movie_Details(this.id); `);
        console.log('movieitems creates: ' + movieitems);

        var items = createNode("div");
        items.setAttribute('class', 'movie-image');
        append(movieitems, items);
        console.log('items creates: ' + items);

        var itemDetails = createNode("div");
        itemDetails.setAttribute('class', 'movie-details');
        append(movieitems, itemDetails);
        console.log('itemDetails creates: ' + itemDetails);
        //movieitems.appendChild(itemDetails);

        var movieName = createNode("label");
        let text = createTextNode(Movie_Name);
        append(movieName, text);
        append(itemDetails, movieName);
        console.log('movieName creates: ' + movieName + " or text: " + text);

        var movieDetails = createNode("label");
        let text2 = createTextNode(`${year} - ${genres}`);
        append(movieDetails, text2);
        append(itemDetails, movieDetails);
        console.log('movieDetails creates: ' + movieDetails + " or text: " + text2);

        console.log('Bind all data in: ' + showData + " or final list is in: " + movieitems);
        append(showData, movieitems);
        //movieitems.appendChild(itemDetails);
        //showData.appendChild(movieitems);
    }
    window.onload = Movie_Details(0);
})();


// below function show movie description
function Movie_Details(index) {
    let show_movie_item = document.querySelectorAll('.movielist-right-bottom')[0];
    let item_length = document.querySelectorAll('.movielist-right-bottom div').length;

    if (item_length !== 0) {
        if (typeof show_movie_item !== 'undefined') {
            var child_remove = document.querySelectorAll('.movielist-right-bottom div')[0];
            show_movie_item.removeChild(child_remove);
        }
    }

    //let Movie_image = createNode("div");
    let Movie_discription = createNode("div");

    /*
    let figure = createNode("figure");
    let movie_img = createNode("img");
    movie_img.src = "img/nature-image-6.jpeg";
    movie_img.setAttribute('style', 'width: 10em; height: 12em;');
    append(figure, movie_img);
    append(Movie_image, figure);
    */

    let Cart_movie = document.querySelectorAll('.movielist-right-bottom movie-description-details')[0];
    var title = ['Title', 'Year', 'Release Date', 'Rating', 'Actors', 'Genres'];
    var count = 0;

    for (var item in movieList[index]) {
/*
        var movieName = createNode("label");
        let text = createTextNode(`${movieList[index].title}`);
        append(movieName, text);
        append(Cart_movie, movieName);
        console.log('movieName creates: ' + movieName + " or text: " + text);

        var movieDetails = createNode("label");
        let text2 = createTextNode(`${movieList[index].year} - ${movieList[index].genres}`);
        append(movieDetails, text2);
        append(Cart_movie, movieDetails);
        console.log('Movie Description: ' + movieName + " or text: " + text);
*/

        let items = createNode("span");
        items.appendChild(createTextNode(`${title[count]}:  ${movieList[index][item]}`));
        append(Movie_discription, items);
        count++;
    }
    // append(show_movie_item, Movie_image);
    append(show_movie_item, Movie_discription);
}

// dynamic funtion to create element
function createNode(nodeName) {
    return document.createElement(nodeName);
}

// dynamic funtion to create text
function createTextNode(nodeName) {
    return document.createTextNode(nodeName);
}

// dynamic funtion to append child
function append(parentNode, childNode) {
    parentNode.appendChild(childNode);
}