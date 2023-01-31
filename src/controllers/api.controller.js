import { loadMovies } from "../helpers/movies.js";
const apiCtrl = {};

apiCtrl.movies = async (req, res) => {
    res.json(await loadMovies());
}

export default apiCtrl;