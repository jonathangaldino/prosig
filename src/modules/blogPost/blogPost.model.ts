import type { Comment } from '../comment/comment.model.js';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  comments: Comment[];
}
