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


function movieBrowse(){
    var i ;
    for(i=0; i < movieList.length; i++) {
        var movieArticle = document.createElement('article');
        movieArticle.classList.add("movie-box");
     /*   movieArticle.addEventListener('click' , movieDetails(movieList[i].title, movieList[i].year, movieList[i].genres, movieList[i].releaseDate, movieList[i].actors));*/


      /*      .addEventListener("click", movieDetails(movieList[i].title, movieList[i].year, movieList[i].genres, movieList[i].releaseDate, movieList[i].actors))    */
        
        var movieName = document.createElement('lable');
        movieName.classList.add("movie-name");
        movieName.appendChild(document.createTextNode(movieList[i].title));
          
        
        
        var movieYear = document.createElement('span');
        movieYear.classList.add("year");
        movieYear.appendChild(document.createTextNode( movieList[i].year + " " +  " - " +  " " + movieList[i].genres));
        
        
        var movieDate = document.createElement('lable');
        movieDate.style.display = "none";
        //movieName.classList.add("release");
        movieDate.appendChild(document.createTextNode(movieList[i].releaseDate));
        
        var movieActor = document.createElement('lable');
        //movieName.classList.add("actor");
        movieActor.style.display = "none";
        movieActor.appendChild(document.createTextNode(movieList[i].actors));
        
        var movieGenre = document.createElement('span');
        //movieName.classList.add("actor");
        movieGenre.style.display = "none";
        movieGenre.appendChild(document.createTextNode(movieList[i].genres));
        
        
        document.getElementsByClassName("column-left")[0].appendChild(movieArticle);
        movieArticle.appendChild(movieName);
        movieArticle.appendChild(movieYear);
        movieArticle.appendChild(movieGenre);
        movieArticle.appendChild(movieDate);
        movieArticle.appendChild(movieActor);
        
        
        
        movieArticle.addEventListener("click" , movieDetails);

    }
    document.getElementsByClassName("title")[0].appendChild(document.createTextNode(movieList[0].title));
    document.getElementsByClassName("year-right")[0].appendChild(document.createTextNode(movieList[0].year));
    document.getElementsByClassName("genre-right")[0].appendChild(document.createTextNode(movieList[0].genres));
    document.getElementsByClassName("release")[0].appendChild(document.createTextNode(movieList[0].releaseDate));
    document.getElementsByClassName("actor")[0].appendChild(document.createTextNode(movieList[0].actors));

}


function movieDetails(){

    var title = document.getElementsByClassName("title")[0];
    if (title.hasChildNodes())
   {
        title.removeChild(title.childNodes[1]);
   }
    
   var yearRight = document.getElementsByClassName("year-right")[0];
    if (yearRight.hasChildNodes())
   {
        yearRight.removeChild(yearRight.childNodes[1]);
   }
    
    var genreRight = document.getElementsByClassName("genre-right")[0];
    if (genreRight.hasChildNodes())
   {
        genreRight.removeChild(genreRight.childNodes[1]);
   }
   
   var releaseRight = document.getElementsByClassName("release")[0];
    if (releaseRight.hasChildNodes())
   {
        releaseRight.removeChild(releaseRight.childNodes[1]);
   }
   
   var actorsRight = document.getElementsByClassName("actor")[0];
    if (actorsRight.hasChildNodes())
   {
        actorsRight.removeChild(actorsRight.childNodes[1]);
   }
    
    document.getElementsByClassName("title")[0].appendChild(document.createTextNode(this.childNodes[0].innerHTML));
    document.getElementsByClassName("year-right")[0].appendChild(document.createTextNode(this.childNodes[1].innerHTML.substr(0,5)));
    document.getElementsByClassName("genre-right")[0].appendChild(document.createTextNode(this.childNodes[2].innerHTML));
    document.getElementsByClassName("release")[0].appendChild(document.createTextNode(this.childNodes[3].innerHTML));
    document.getElementsByClassName("actor")[0].appendChild(document.createTextNode(this.childNodes[4].innerHTML));


}



















