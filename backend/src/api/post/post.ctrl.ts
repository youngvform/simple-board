import { Request, Response, NextFunction } from 'express';
import { format } from 'date-fns';
import { Post } from '../../types';

let postId = 1;
const posts: Post[] = [];

export function list(req: Request, res: Response, next: NextFunction) {
  res.json(posts);
}

export function write(req: Request, res: Response, next: NextFunction) {
  try {
    const { title, contents } = req.body;
    // const { id } = req.user;
    const now = format(new Date(), `yyyy년 MM월 dd일 a h시 m분`);
    const post: Post = {
      id: postId++,
      title,
      contents,
      createdAt: now,
      updatedAt: now,
      userId: 'abc',
    };
    posts.push(post);
    return res.json(posts);
  } catch (error) {
    next(error);
  }
}
