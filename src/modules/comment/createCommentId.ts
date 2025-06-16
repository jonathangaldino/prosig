import { v4 } from 'uuid';
import type { CommentId } from './comment.types';

export function createCommentId(): CommentId {
  return `cmt_${v4()}` as CommentId;
}
