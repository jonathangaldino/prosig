import { v4 } from 'uuid';
import type { PostId } from '../blogPost.types';

export function createPostId(): PostId {
  return `post_${v4()}` as PostId;
}

export function isValidPostId(id: string): id is PostId {
  // Improvement: Use a regex to validate the postId
  return id.startsWith('post_');
}
