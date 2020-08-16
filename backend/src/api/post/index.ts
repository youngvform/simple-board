import express from 'express';
import { list, write } from './post.ctrl';

const router = express.Router();
router.get('/list', list);
router.post('/write', write);

export default router;
