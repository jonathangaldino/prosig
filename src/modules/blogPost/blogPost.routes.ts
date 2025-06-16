import { posts } from '../../infra/database/db.js';
import { server } from '../../infra/http/server.js';

type GetPostsResponse = { id: string; title: string; commentsCount: number }[];

server.get<{ Reply: GetPostsResponse }>(
  '/api/posts',
  async (request, reply) => {
    return reply.code(200).send(
      posts.map((post) => ({
        id: post.id,
        title: post.title,
        commentsCount: post.comments.length,
      })),
    );
  },
);
