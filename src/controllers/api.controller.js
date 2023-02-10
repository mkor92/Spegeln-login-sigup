import apiAdapter from "../helpers/apiAdapter.js";
import { loadMovies, loadMovie } from "../helpers/movies.js";
import { loadAllReviews, loadMovieReviews } from "../helpers/reviews.js";

import { getAllScreenings, movieScreenings, screeningsStartpage } from "../helpers/screenings.js";

import { loadMovieRatings } from "../helpers/ratings.js";

const apiCtrl = {};

apiCtrl.movies = async (req, res) => {
  res.json(await loadMovies());
};

apiCtrl.movie = async (req, res) => {
  res.json(await loadMovie(req.params.id));
};

apiCtrl.startpageScreenings = async (req, res) => {
  res.json(await screeningsStartpage(apiAdapter));
};

apiCtrl.movieScreenings = async (req, res) => {
  if (!req.query.page) {
    res.json(await movieScreenings(req.params.id));
  } else {
    res.json(await movieScreenings(req.params.id, req.query.page));
  }
};

apiCtrl.getAllScreenings = async (req, res) => {
  res.json(await getAllScreenings());
};

apiCtrl.movieReviews = async (req, res) => {
  res.json(await loadMovieReviews(req.params.id, req.query.page));
};

apiCtrl.reviews = async (req, res) => {
  res.json(await loadAllReviews());
};

apiCtrl.movieRating = async (req, res) => {
  res.json(await loadMovieRatings(req.params.id));
};

export default apiCtrl;
