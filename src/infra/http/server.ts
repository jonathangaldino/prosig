import helmet from '@fastify/helmet';
import Fastify from 'fastify';
import { addBlogPostRoutes } from './route.js';

const server = Fastify({ logger: true });

server.register(helmet);

addBlogPostRoutes(server);

export { server };
