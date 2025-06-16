import { createPostId } from '../utils/createPostId.js';

export function CreateBlogPost(title: string, content: string) {
  // Improvement 1: Validate the input using Zod.

  return {
    id: createPostId(),
    title,
    content,
    comments: [],
  };
}
