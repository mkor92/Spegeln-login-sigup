import { Router } from 'express';
import apiCtrl from './../controllers/api.controller.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        api: "welcome to the api"
    });
});

router.get('/movies', apiCtrl.movies);
router.get('/movies/:id/screenings', apiCtrl.movieScreenings);
router.get('/movies/screenings', apiCtrl.screenings);
router.get('*', (req, res)=> {
    res.json({
        message: "not-found"
    }).status(404);
})

export default router;