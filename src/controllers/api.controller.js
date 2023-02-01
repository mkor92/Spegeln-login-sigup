import { loadMovies } from "../helpers/movies.js";
import { loadReviews } from "../helpers/reviews.js";

const apiCtrl = {};

apiCtrl.movies = async (req, res) => {
    res.json(await loadMovies());
}

apiCtrl.reviews = async (req, res) => {
    res.json(await loadReviews())
}


export default apiCtrl;