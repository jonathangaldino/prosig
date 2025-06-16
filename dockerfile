# Stage 1: Build the TypeScript app
FROM node:23.3.0-bullseye-slim AS builder

# Set working directory
WORKDIR /usr/project

# Copy package.json and lockfile for deterministic installs
COPY package*.json ./

# Install all dependencies (including dev for build)
RUN npm i

# Copy source code
COPY . .

# Build the TypeScript code
RUN npm run build

# Stage 2: Production image
FROM node:23.3.0-bullseye-slim

# Set NODE_ENV for production optimizations
ENV NODE_ENV=production

WORKDIR /usr/project

# Copy package.json and lockfile
COPY package*.json ./

# Install only production dependencies deterministically
RUN npm i --omit=dev

# Copy built files from builder stage
COPY --from=builder /usr/project/dist ./

# Expose the port your Fastify app listens on (adjust if needed)
EXPOSE 3000

# Run the app directly with node (exec form) to ensure proper signal handling
CMD ["node", "src/app.js"]
