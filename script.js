'use strict';
  
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: () => {
    personalMovieDB.count = +prompt("How many films have you already watched? (Type only numbers)", "");

    while (personalMovieDB.count == null || personalMovieDB.count == "" || isNaN(personalMovieDB.count)) 
		personalMovieDB.count = +prompt("How many films have you already watched? (Type only numbers)", "")
  },
  detectPersonalLevel: () => {
    personalMovieDB.count < 10 
		? console.log("Watched a few films") 
	: personalMovieDB.count >= 10 && personalMovieDB.count < 30 
		? console.log("You are a classic viewer") 
	: personalMovieDB.count >= 30 
		? console.log("You are a movie buff!") 
	: console.log("There was an error!")
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 3; i++) {
      let lastWatchedFilm = prompt(`One of the last movies you watched? ${i+1}/3`, ""),
          giveRating = +prompt(`Movie: "${lastWatchedFilm}". How much would you rate it, from 1 to 10 stars? `, "");
  
      lastWatchedFilm != null &&
      giveRating != null &&
      lastWatchedFilm != "" &&
      giveRating != "" &&
      lastWatchedFilm.length <= 50 &&
      !isNaN(giveRating) &&
      giveRating <= 10
        ? (personalMovieDB.movies[lastWatchedFilm] = giveRating, console.log("Done!"))
        : (i--, console.log("Error!"));
    }
  },
  writeYourGenres: () => {
      let genres = prompt('Type your favorite genres separated by commas. (Example: "Drama, Thriller, Detective")', '');

	(genres === null || genres === "") 
		? (console.log("Yor wrote incorrect genres or nothing type!"), y--)
		: (personalMovieDB.genres = genres.split(', '), personalMovieDB.genres.sort())

    personalMovieDB.genres.forEach((item, i) => console.log(`Favorite genre #${i+1} is ${item}`))
  },
  showMyDB: (hidden) => !hidden ? console.log(personalMovieDB) : console.log("The Movie Database is private!"),
  toggleVisibleMyDB: () => personalMovieDB.private = !personalMovieDB.private
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.private);
