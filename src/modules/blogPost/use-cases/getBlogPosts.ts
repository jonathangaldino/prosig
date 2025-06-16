import { dependencyContainer } from 'src/diContainer.js';
import { IDatabase } from 'src/domain/interfaces/IDatabase.js';

export function GetBlogPosts() {
  const db = dependencyContainer.resolve<IDatabase>('Database');

  return db.posts;
}
