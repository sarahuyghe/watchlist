import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class MovieWatchList {
	constructor(title, movieId, poster, watched, id = uuid.v4()) {
		this.id = id;
		this.movieId = movieId;
		this.title = title;
		this.poster = poster;
		this.watched = watched;
	}

	setId = id => (this.id = id);
	setTitle = value => (this.title = value);
	setMovieId = value => (this.movieId = value);
	setPoster = value => (this.poster = value);
	setWatched = value => (this.watched = value);

	get values() {
		return {
			title: this.title,
			movieId: this.movieId,
			poster: this.poster,
			watched: this.watched
		};
	}

	updateFromServer = values => {
		this.setId(values._id);
		this.setTitle(values.title);
		this.setMovieId(values.movieId);
		this.setPoster(values.poster);
		this.setWatched(values.watched);
	};
}

decorate(MovieWatchList, {
	id: observable,
	title: observable,
	movieId: observable,
	poster: observable,
	watched: observable,
	setId: action,
	setTitle: action,
	setMovieId: action,
	setPoster: action,
	setWatched: action,
	values: computed
});

export default MovieWatchList;
