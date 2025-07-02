import type { Comment } from '../comment/comment.model.js';
import type { BlogPost } from './blogPost.model.js';
import type { PostId } from './blogPost.types.js';
import { addCommentToBlogPost } from './use-cases/addCommentToBlogPost.js';
import { CreateBlogPost } from './use-cases/createBlogPost.js';
import { GetBlogPostById } from './use-cases/getBlogPostById.js';
import { GetBlogPosts } from './use-cases/getBlogPosts.js';

type GetPostsResponse = { id: string; title: string; commentsCount: number }[];

export class BlogPostController {
  getBlogPosts(): GetPostsResponse {
    const posts = GetBlogPosts();

    return posts.map((post) => ({
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
    return GetBlogPostById(blogPostId);
  }

  addCommentToPost(blogPostId: PostId, content: string): Comment | null {
    return addCommentToBlogPost(blogPostId, content);
  }
}
