import {
	configure,
	decorate,
	observable,
	runInAction,
	action,
	observe
} from "mobx";
import MovieWatchList from "../models/MovieWatchList";
import Api from "../api";

configure({ enforceActions: `observed` });

class WatchListStore {
	watchlist = [];
	constructor(rootStore) {
		this.rootStore = rootStore;

		this.api = new Api(`watchlist`);
		if (this.rootStore.uiStore.authUser) {
			this.getAllMoviesOnWatchList();
		}

		observe(this.rootStore.uiStore, "authUser", change => {
			if (change.newValue) {
				this.getAllMoviesOnWatchList();
			} else {
				runInAction(() => (this.watchlist = []));
			}
		});
	}

	getAllMoviesOnWatchList = () => {
		this.api
			.getAllMoviesOnWatchList()
			.then(d => d.forEach(this._addMovieWatchList));
	};

	addMovieWatchList = ({ title, movieId, poster, watched, _id }) => {
		const movies = this.watchlist.find(
			titleMovie => titleMovie.movieId === movieId
		);
		if (!movies) {
			const newMovie = new MovieWatchList(title, movieId, poster, watched, _id);
			runInAction(() => this.watchlist.push(newMovie));
			this.api
				.create(newMovie)
				.then(movieValues => newMovie.updateFromServer(movieValues));
		} else {
			console.log("already in list");
		}
	};

	_addMovieWatchList = ({ title, movieId, poster, watched, _id }) => {
		const movies = this.watchlist.find(
			titleMovie => titleMovie.movieId === movieId
		);
		if (!movies) {
			const newItem = new MovieWatchList(title, movieId, poster, watched, _id);
			runInAction(() => this.watchlist.push(newItem));
		} else {
			console.log("already in list");
		}
	};

	updateWatchlist = movie => {
		this.api
			.update(movie)
			.then(movieValues => movie.updateFromServer(movieValues));
	};

	deleteMovieWatchList = movie => {
		this.watchlist.remove(movie);
		this.api.delete(movie);
	};
}

decorate(WatchListStore, {
	watchlist: observable,
	addMovieWatchList: action,
	_addMovieWatchList: action,
	deleteMovieWatchList: action
});

export default WatchListStore;
