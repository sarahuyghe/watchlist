import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";

import styles from "./MovieWatchList.module.css";

class MovieWatchlist extends Component {
	constructor(props) {
		super(props);
		this.title = React.createRef();
	}

	handleUpdate = () => {
		this.props.movie.setWatched(!this.props.movie.watched);
		this.props.onUpdate(this.props.movie);
	};

	render() {
		const { movie, onDelete } = this.props;

		return (
			<div className={styles.movieWatched}>
				<img
					src={movie.poster}
					alt="test"
					width="320"
					height="474"
					className={movie.watched ? styles.imageSeen : styles.imageNeedToSee}
				/>
				<p className={styles.title} ref={this.title}>
					{movie.title}
				</p>
				<div>
					{movie.watched ? (
						<button
							className={styles.buttonWatching}
							onClick={() => {
								this.handleUpdate();
							}}
						>
							Watched it
						</button>
					) : (
						<button
							className={styles.buttonWatched}
							onClick={() => {
								this.handleUpdate();
							}}
						>
							Need to watch
						</button>
					)}

					<button
						onClick={() => onDelete(movie)}
						className={styles.buttonDelete}
					>
						Delete
					</button>
				</div>
			</div>
		);
	}
}

MovieWatchlist.propTypes = {
	movie: PropTypes.object.isRequired
};

export default observer(MovieWatchlist);
