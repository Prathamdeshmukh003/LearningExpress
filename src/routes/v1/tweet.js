import express from 'express';
import { createTweet, createTweetById, getTweetById, getTweets } from '../../controllers/tweetController.js';

const router = express.Router();//Creates a new router object

router.get("/",getTweets);

router.get("/:id",getTweetById); 

router.post("/",createTweet);
router.post("/:id",createTweetById);

export default router;//Exports the router object