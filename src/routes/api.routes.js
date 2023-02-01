import { Router } from "express";
import apiCtrl from "./../controllers/api.controller.js";

const router = Router();

router.get("/movies", apiCtrl.movies);
router.get("/movies/:id/screenings", apiCtrl.movieScreenings);
router.get("/screenings", apiCtrl.screenings);
router.get("/screenings/startpage", apiCtrl.screeningsStartpage);
router.get("*", (req, res) => {
  res
    .json({
      message: "not-found",
    })
    .status(404);
});
export default router;
