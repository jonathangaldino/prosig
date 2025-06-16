# Prosigliere Code Challenge

## Coding Challenge

You are tasked with designing and implementing a RESTful API for managing a simple blogging platform. The core functionality of this platform includes managing blog posts and their associated comments.

Requirements:

Data Models:

- Create two data models:
  - BlogPost and Comment. A BlogPost has a title and content, and each BlogPost can have multiple Comment objects associated with it.

API Endpoints:

- Implement the following API endpoints:
- GET /api/posts: This endpoint should return a list of all blog posts, including their titles and the number of comments associated with each post.
- POST /api/posts: Create a new blog post.
- GET /api/posts/{id}: Retrieve a specific blog post by its ID, including its title, content, and a list of associated comments.
- POST /api/posts/{id}/comments: Add a new comment to a specific blog post.

## Challenge Submission

Please send an email to the hiring manager including a Github link to the code you created at your earliest convenience. Bear in mind that the code should be production ready but it's ok to not complete it in full.

Please don't dedicate more than 4 hours to work on this project.

Please add a README with instructions to run it, and what would be your next steps if you had more
time available.


## Instructions to setup the project

> No need to setup a database. We're using in-memory database. Thus, bear in mid, the db will be reset everytime you run the app.

### Development

Requirements:
- Node.js v23.11.0 or higher
- pnpm 8.14.0 or higher

To install dependencies:
```bash
$ pnpm i
```

To run the app and develop it:
```bash
$ pnpm dev
```

### "Production"

Requirements: Docker

1. Build the docker image:
```bash
$ docker build -t prosigliere-code-challenge .
```

2. Run the docker image:
```bash
$ docker run -p 3000:3000 prosigliere-code-challenge
```

## Improvements:

What I would improve if I had more time:

This is a simple project. I don't see any big improvements as it doesn't reflect an API that would be used in production.
However, there are a few things that I could add to make it better and more real-world like:

### Zod for runtime validations. 
As we know, Typescript provides type checking at compile time. Using Zod, we can validate inputs at runtime, making our application a little more robust and secure, since we can start dealing with predictable inputs.

### Dependency Injection Container.
I'm using tsyringe for dependency injection. It's a simple and lightweight container that allows us to register and resolve dependencies.
I've added this as an example. Dependency Injection is a technique applied to real-world applications to manage dependencies and make them more testable.
Not to mention, it's a good practice to follow in software development.

### Error Handling
Theresn't a lot of error handling in this project. As a simple project and with a inmemory database, nothing much to worry about.

However, In a real project, we would need to handle errors and exceptions gracefully. Also, worry about scenarios like: What do to if the connection to the database is lost? What if the database is down?

### Logging
Logging is an essential part of any application.
With Fastify, I've added a simple logger that logs all the requests.
What about having trace logs? What about logging errors?

### Testing

I've added some tests for the use-cases. I'm using vitest for testing.
However, I did not add tests for the API routes.

### API Docs
I usually go with Swagger for API documentation.
For fastify, there is a plugin called [fastify-swagger](https://github.com/fastify/fastify-swagger). Perfect for this project. 

P.s: Any other level of documentation I put in the company's internal documentation (Confluence, etc).

### Environment Variables
Since we don't have envs to load, I haven't touched it.
We can use dotenv for that. Its famous for loading environment variables from a .env file for Node.js projects.
