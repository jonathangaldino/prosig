import helmet from '@fastify/helmet';
import Fastify from 'fastify';

const server = Fastify({ logger: true });

server.register(helmet);

export { server };
