import { Router } from 'express';

const router = Router();

router.get('/', (req, res)=> {
    res.json({
        api: "welcome to the api"
    })
})

export default router;