import { Router } from "express";
import apiCtrl from "./../controllers/api.controller.js";

const router = Router();

router.get("/movies", apiCtrl.movies);
router.get("/movies/:id/screenings", apiCtrl.movieScreenings);
router.get("/screenings", apiCtrl.getAllScreenings);
router.get("/screenings/startpage", apiCtrl.startpageScreenings);
router.get("/reviews", apiCtrl.reviews);
router.get("/reviews/:id", apiCtrl.movieReviews);
router.get("/movies/ratings,", apiCtrl.ratings)
router.get("/movies/:id/ratings", apiCtrl.movieRating);
router.get("*", (req, res) => {
  res
    .json({
      message: "not-found",
    })
    .status(404);
});

export default router;
