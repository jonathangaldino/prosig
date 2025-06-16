import type { Comment } from '../comment/comment.model';
import { PostId } from './blogPost.types';

export interface BlogPost {
  id: PostId;
  title: string;
  content: string;
  comments: Comment[];
}
