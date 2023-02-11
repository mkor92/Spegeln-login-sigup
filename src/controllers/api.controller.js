import { loadMovies } from "../helpers/movies.js";
import { loadAllReviews, loadMovieReviews } from "../helpers/reviews.js";
import { sendReview } from "../helpers/review.js";

import { getAllScreenings, movieScreenings, screeningsStartpage } from "../helpers/screenings.js";

const apiCtrl = {};

apiCtrl.movies = async (req, res) => {
  res.json(await loadMovies());
};

apiCtrl.startpageScreenings = async (req, res) => {
  res.json(await screeningsStartpage());
};

apiCtrl.movieScreenings = async (req, res) => {
  res.json(await movieScreenings(req.params.id));
};

apiCtrl.screenings = async (req, res) => {
  res.json(await getAllScreenings());
};

apiCtrl.movieReviews = async (req, res) => {
  res.json(await loadMovieReviews(req.params.id));
};
apiCtrl.reviews = async (req, res) => {
  res.json(await loadAllReviews());
};

apiCtrl.review = async (req,res) => { 
  res.json(await sendReview(req.params.id));
};

export default apiCtrl;
