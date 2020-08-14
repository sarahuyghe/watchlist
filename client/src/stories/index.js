import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import MovieWatchlist from "./../components/watchlist/MovieWatchlist";

import MovieWatchList from "./../models/MovieWatchList";

import Movies from "./../components/home/Movies";
import LoginForm from "./../components/auth/LoginForm";
import RegisterForm from "./../components/auth/RegisterForm";

const movie = new MovieWatchList(
	`Hellboy`,
	`537915`,
	`https://image.tmdb.org/t/p/w500//bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg`,
	false
);
const movieWatched = new MovieWatchList(
	`Hellboy`,
	`537915`,
	`https://image.tmdb.org/t/p/w500//bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg`,
	true
);

storiesOf(`watchlist`, module)
	.add(`list`, () => <MovieWatchlist movie={movie} />)
	.add(`watched movie`, () => <MovieWatchlist movie={movieWatched} />);

storiesOf(`Navigation`, module)
	.add(`Home`, () => <Movies />)
	.add(`Login`, () => <LoginForm />)
	.add(`Register`, () => <RegisterForm />);
