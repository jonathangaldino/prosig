import { dependencyContainer } from 'src/diContainer.js';

import { IDatabase } from 'src/domain/interfaces/IDatabase.js';
import { BlogPost } from '../blogPost.model.js';
import { createPostId } from '../utils/createPostId.js';

export function CreateBlogPost(title: string, content: string): BlogPost {
  const db = dependencyContainer.resolve<IDatabase>('Database');

  // Improvement 1: Validate the input using Zod.
  const newBlogPost: BlogPost = {
    id: createPostId(),
    title,
    content,
    comments: [],
  };

  db.posts.push(newBlogPost);

  return newBlogPost;
}
