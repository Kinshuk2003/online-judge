import express from 'express';
import v1Router from './v1/v1Route.js';


const router = express.Router();

router.use('/v1', v1Router);
// if the remaining req url starts with /tweets, use tweetRouter

export default router;