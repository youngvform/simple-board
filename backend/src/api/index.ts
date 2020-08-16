import express from 'express';
import post from './post';
import user from './user';

const router = express.Router();

router.use('/post', post);
router.use('/user', user);

export default router;
