import { loadMovies } from "../helpers/movies.js";
import { getAllScreenings, movieScreenings, screeningsStartpage } from "../helpers/screenings.js";
import { loadAllReviews, loadMovieReviews } from "../helpers/reviews.js";

const apiCtrl = {};

apiCtrl.movies = async (req, res) => {
  res.json(await loadMovies());
};

apiCtrl.movieScreenings = async (req, res) => {
  res.json(await movieScreenings(req.params.id));
};

apiCtrl.screenings = async (req, res) => {
  res.json(await getAllScreenings());
};

apiCtrl.screeningsStartpage = async (req, res) => {
  res.json(await screeningsStartpage());
};
apiCtrl.movieReviews = async (req, res) => {
  res.json(await loadMovieReviews(req.params.id));
};
apiCtrl.reviews = async (req, res) => {
  res.json(await loadAllReviews());
};

export default apiCtrl;
