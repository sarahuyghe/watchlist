import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { inject } from "mobx-react";

import Movies from "./components/home/Movies";
import Upcoming from "./components/home/Upcoming";
import TopRated from "./components/home/TopRated";
import Watchlists from "./components/watchlist/Watchlist";
import Navigation from "./components/navigation";
import Login from "./components/auth/LoginForm";
import Register from "./components/auth/RegisterForm";

import { ROUTES } from "./constants/";

import "./styles.css";
const App = ({ uiStore }) => {
	return (
		<div className="App">
			<Navigation />
			<Switch>
				<Route path={ROUTES.home} exact strict component={Movies} />
				<Route path={ROUTES.upcoming} component={Upcoming} />
				<Route path={ROUTES.toprated} component={TopRated} />
				<Route path={ROUTES.watchlist} exact component={Watchlists} />
				<Route path={ROUTES.login} component={Login} />
				<Route path={ROUTES.register} component={Register} />
			</Switch>
		</div>
	);
};

export default inject("uiStore")(App);
