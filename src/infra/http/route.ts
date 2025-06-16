import type { FastifyInstance } from 'fastify';
import { BlogPostController } from '../../modules/blogPost/blogPost.controller.js';
import { isValidPostId } from '../../modules/blogPost/utils/createPostId.js';

// Improvements:
// 1. Add a error handler middlware to globally handle errors and catch unknown errors.
// 2. Use dependency injection container to load the controllers/other services.

const blogPostController = new BlogPostController();

export function addBlogPostRoutes(server: FastifyInstance) {
  console.log('Registering blog post routes.');
  server.get('/api/posts', async (_, reply) => {
    return reply.code(200).send({ data: blogPostController.getBlogPosts() });
  });

  server.post<{
    Body: { title: string; content: string };
  }>('/api/posts', async (request, reply) => {
    const { title, content } = request.body;
    const newPost = blogPostController.createBlogPost({ title, content });
    return reply.code(200).send({ data: newPost });
  });

  server.get<{
    Params: { id: string };
  }>('/api/posts/:id/comments', (request, reply) => {
    const { id } = request.params;
    if (!isValidPostId(id)) {
      return reply
        .code(400)
        .send({ error: { code: 'INVALID_ID', message: 'Invalid post id.' } });
    }

    const post = blogPostController.getBlogPostById(id);

    if (!post) {
      return reply
        .code(404)
        .send({ error: { code: 'POST_NOT_FOUND', message: 'Post not found' } });
    }

    return reply.code(200).send({ data: post });
  });
}

// BlogPosts routes

// Comments routes
