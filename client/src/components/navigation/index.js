import React from "react";
import { NavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { ROUTES } from "../../constants";

import styles from "./Navigation.module.css";

const Navigation = ({ uiStore }) => {
	return (
		<nav className={styles.navSection}>
			{uiStore.authUser ? (
				<>
					<ul>
						<li>
							<NavLink to={ROUTES.home} className={styles.links}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to={ROUTES.upcoming} className={styles.links}>
								Upcoming
							</NavLink>
						</li>
						<li>
							<NavLink to={ROUTES.toprated} className={styles.links}>
								Top rated
							</NavLink>
						</li>
					</ul>
					<ul>
						<li>
							<NavLink to={ROUTES.watchlist} className={styles.links}>
								Your watchlist
							</NavLink>
						</li>
						<button onClick={uiStore.logout} className={styles.logout}>
							logout
						</button>
					</ul>
				</>
			) : (
				<>
					<ul>
						<li>
							<NavLink to={ROUTES.home} className={styles.links}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to={ROUTES.upcoming} className={styles.links}>
								Upcoming
							</NavLink>
						</li>
						<li>
							<NavLink to={ROUTES.toprated} className={styles.links}>
								Top rated
							</NavLink>
						</li>
					</ul>
					<ul>
						<li>
							<NavLink to={ROUTES.login} className={styles.links}>
								Sign in
							</NavLink>
						</li>
						<li>
							<NavLink to={ROUTES.register} className={styles.links}>
								Register
							</NavLink>
						</li>
					</ul>
				</>
			)}
		</nav>
	);
};

export default inject("uiStore")(observer(Navigation));
