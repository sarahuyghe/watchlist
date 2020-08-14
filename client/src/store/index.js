import MovieStore from "./MovieStore";
import WatchListStore from "./WatchListStore";
import UiStore from "./UiStore";

class RootStore {
	constructor() {
		this.uiStore = new UiStore(this);
		this.movieStore = new MovieStore(this);
		this.watchlistStore = new WatchListStore(this);
	}
}

export default new RootStore();
