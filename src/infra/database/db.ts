import { IDatabase } from 'src/domain/interfaces/IDatabase';
import { injectable } from 'tsyringe';
import { dependencyContainer } from '../../diContainer.js';
import type { BlogPost } from '../../modules/blogPost/blogPost.model';

@injectable({ token: 'Database' })
class InMemoryDB implements IDatabase {
  posts: BlogPost[] = [];

  reset() {
    this.posts = [];
  }
}

dependencyContainer.register<IDatabase>('Database', {
  useValue: new InMemoryDB(),
});
