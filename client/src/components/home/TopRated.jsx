import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import { inject, observer } from "mobx-react";

import typoStyles from "../../Typo.module.css";
import styles from "./Movies.module.css";

const Movies = ({ movieStore }) => {
	const { topRated } = movieStore;
	return (
		<>
			<section>
				<h1 className={typoStyles.mainTitle}>Top rated</h1>
				<section className={styles.sectionMovies}>
					{topRated.map((movie, index) => (
						<Movie key={index} movie={movie} />
					))}
				</section>
			</section>
		</>
	);
};

Movies.propTypes = {
	movieStore: PropTypes.object.isRequired
};

export default inject("movieStore")(observer(Movies));
