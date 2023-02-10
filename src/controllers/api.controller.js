import apiAdapter from "../helpers/apiAdapter.js";
import { loadMovies } from "../helpers/movies.js";
import { loadAllReviews, loadMovieReviews } from "../helpers/reviews.js";

import { getAllScreenings, getMovieScreenings, screeningsStartpage } from "../helpers/screenings.js";

const apiCtrl = {};

apiCtrl.movies = async (req, res) => {
  res.json(await loadMovies());
};

apiCtrl.startpageScreenings = async (req, res) => {
  res.json(await screeningsStartpage(apiAdapter));
};

apiCtrl.movieScreenings = async (req, res) => {
  if (!req.query.page) {
    res.json(await getMovieScreenings(apiAdapter, req.params.id));
  } else {
    res.json(await getMovieScreenings(apiAdapter, req.params.id, req.query.page));
  }
};

apiCtrl.getAllScreenings = async (req, res) => {
  res.json(await getAllScreenings());
};

apiCtrl.movieReviews = async (req, res) => {
  res.json(await loadMovieReviews(req.params.id, req.query));
};

apiCtrl.reviews = async (req, res) => {
  res.json(await loadAllReviews());
};

export default apiCtrl;
