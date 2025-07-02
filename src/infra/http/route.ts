import type { FastifyInstance } from 'fastify';
import { BlogPostController } from '../../modules/blogPost/blogPost.controller.js';
import { isValidPostId } from '../../modules/blogPost/utils/createPostId.js';

// Improvements:
// 1. Add a error handler middlware to globally handle errors and catch unknown errors.
// 2. Use dependency injection container to load the controllers/other services.
// 3. Use try catch when calling use-cases - to handle unknown errors
// 4. Use Zod to validate input that comes from the api. Just to make sure.

const blogPostController = new BlogPostController();

export function addBlogPostRoutes(server: FastifyInstance) {
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
  }>('/api/posts/:id', (request, reply) => {
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

  server.post<{
    Params: { id: string };
    Body: { content: string };
  }>('/api/posts/:id/comments', async (request, reply) => {
    const { id } = request.params;

    if (!isValidPostId(id)) {
      return reply
        .code(400)
        .send({ error: { code: 'INVALID_ID', message: 'Invalid post id.' } });
    }

    const post = blogPostController.getBlogPostById(id);

    if (!post) {
      return reply.code(404).send({
        error: { code: 'POST_NOT_FOUND', message: 'Post not found' },
      });
    }

    const { content } = request.body;

    const newComment = blogPostController.addCommentToPost(id, content);

    return reply.code(201).send({ data: newComment });
  });
}
