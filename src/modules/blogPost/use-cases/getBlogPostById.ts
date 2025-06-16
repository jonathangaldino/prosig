import { dependencyContainer } from 'src/diContainer.js';
import { IDatabase } from 'src/domain/interfaces/IDatabase.js';
import { BlogPost } from '../blogPost.model.js';
import { PostId } from '../blogPost.types.js';

export function GetBlogPostById(id: PostId): BlogPost | null {
  const db = dependencyContainer.resolve<IDatabase>('Database');

  const post = db.posts.find((post) => post.id === id);

  if (!post) {
    return null;
  }

  return post;
}
