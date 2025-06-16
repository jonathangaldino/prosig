import type { BlogPost } from '../../modules/blogPost/blogPost.model.js';

export const posts: BlogPost[] = [];
let postId = 1;
let commentId = 1;

export function getNextPostId() {
  return postId++;
}
export function getNextCommentId() {
  return commentId++;
}
