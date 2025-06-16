import { Comment } from "../comment.model";
import { createCommentId } from "../utils/createCommentId";

export function createComment(content: string) {
  const id = createCommentId();

  return {
    id,
    content,
  } satisfies Comment;
}