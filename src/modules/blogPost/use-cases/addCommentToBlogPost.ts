import { dependencyContainer } from 'src/diContainer';
import { IDatabase } from 'src/domain/interfaces/IDatabase';
import { Comment } from 'src/modules/comment/comment.model';
import { createComment } from 'src/modules/comment/use-cases/createComment';
import { PostId } from '../blogPost.types';

export function addCommentToBlogPost(
  blogPostId: PostId,
  content: string,
): Comment | null {
  const db = dependencyContainer.resolve<IDatabase>('Database');
  const post = db.posts.find((post) => post.id === blogPostId);

  if (!post) {
    console.error(`Post not found: ${blogPostId}`);
    return null;
  }

  // Any validations logic when creating comment should live in the comment module.
  const newComment = createComment(content);

  console.log(`New comment: ${newComment}`);

  // Link comment to post
  post.comments.push(newComment);

  return newComment;
}
