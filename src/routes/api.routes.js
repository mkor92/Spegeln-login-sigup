import { Router } from 'express';
import apiCtrl from './../controllers/api.controller.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        api: "welcome to the api"
    })
});

router.get('/movies', apiCtrl.movies);

export default router;