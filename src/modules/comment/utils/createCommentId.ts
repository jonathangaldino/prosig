import { v4 } from 'uuid';
import { CommentId } from '../comment.types';

export function createCommentId(): CommentId {
  return `cmt_${v4()}` as CommentId;
}
