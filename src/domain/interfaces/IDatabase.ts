import { BlogPost } from 'src/modules/blogPost/blogPost.model';

export interface IDatabase {
  posts: BlogPost[];
  reset(): void;
  // add any other methods you use, e.g. addPost, getPostById, etc.
}
