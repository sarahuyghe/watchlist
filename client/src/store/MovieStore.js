import { configure, decorate, observable, runInAction, action } from "mobx";
import Movie from "../models/Movie";

import Api from "../api";

configure({ enforceActions: `observed` });

class MovieStore {
	movies = [];
	upcoming = [];
	topRated = [];

	constructor(rootStore) {
		this.rootStore = rootStore;

		this.api = new Api();

		this.api
			.getAllMovies()
			.then(d => d.results.forEach(data => this._addMovie(data)));

		this.api
			.getAllMoviesUpcoming()
			.then(d => d.results.forEach(data => this._addMovieUpcoming(data)));

		this.api
			.getAllMoviesTopRating()
			.then(d => d.results.forEach(data => this._addMovieTopRating(data)));
	}

	_addMovie = data => {
		const movie = new Movie(data);
		runInAction(() => this.movies.push(movie));
	};

	_addMovieUpcoming = data => {
		const movie = new Movie(data);
		runInAction(() => this.upcoming.push(movie));
	};
	_addMovieTopRating = data => {
		const movie = new Movie(data);
		runInAction(() => this.topRated.push(movie));
	};
}

decorate(MovieStore, {
	movies: observable,
	_addMovie: action,
	_addMovieTopRating: action,
	_addMovieUpcoming: action
});

export default MovieStore;
