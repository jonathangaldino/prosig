import { db } from '../../infra/database/db.js';
import type { Comment } from '../comment/comment.model.js';
import type { BlogPost } from './blogPost.model.js';
import type { PostId } from './blogPost.types.js';
import { CreateBlogPost } from './use-cases/createBlogPost.js';

type GetPostsResponse = { id: string; title: string; commentsCount: number }[];

export class BlogPostController {
  getBlogPosts(): GetPostsResponse {
    return db.posts.map((post) => ({
      id: post.id,
      title: post.title,
      commentsCount: post.comments.length,
    }));
  }

  createBlogPost(input: { title: string; content: string }): BlogPost {
    const newBlogPost = CreateBlogPost(input.title, input.content);
    return newBlogPost;
  }

  getBlogPostById(blogPostId: PostId): BlogPost | null {
    const post = posts.find((post) => post.id === blogPostId);

    if (!post) {
      return null;
    }

    return post;
  }

  addCommentToPost(blogPostId: PostId, content: string): Comment {
    return this.addCommentToPost(blogPostId, content);
  }
}
