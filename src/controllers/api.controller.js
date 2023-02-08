import { loadMovies } from "../helpers/movies.js";
import { loadAllReviews, loadMovieReviews } from "../helpers/reviews.js";

import { getAllScreenings, movieScreenings, screeningsStartpage } from "../helpers/screenings.js";

const apiCtrl = {};

apiCtrl.movies = async (req, res) => {
  res.json(await loadMovies());
};

apiCtrl.startpageScreenings = async (req, res) => {
  res.json(await screeningsStartpage());
};

apiCtrl.movieScreenings = async (req, res) => {
  if(!req.query.page) {
      res.json(await movieScreenings(req.params.id));
    } else {
    res.json(await movieScreenings(req.params.id, req.query.page))
  }
};

apiCtrl.getAllScreenings = async (req, res) => {
  res.json(await getAllScreenings());
};

apiCtrl.movieReviews = async (req, res) => {
  res.json(await loadMovieReviews(req.params.id));
};
apiCtrl.reviews = async (req, res) => {
  res.json(await loadAllReviews());
};

export default apiCtrl;
