import { loadMovies } from "../helpers/movies.js";
import { loadReviews } from "../helpers/reviews.js";

import { getAllScreenings, movieScreenings } from "../helpers/screenings.js";

const apiCtrl = {};

apiCtrl.movies = async (req, res) => {
    res.json(await loadMovies());
}

apiCtrl.movieScreenings = async (req, res) => { 
    res.json(await movieScreenings(req.params.id))
}

apiCtrl.screenings = async (req, res) => {
    res.json(await getAllScreenings());
}


apiCtrl.reviews = async (req, res) => {
    res.json(await loadReviews())
}


export default apiCtrl;