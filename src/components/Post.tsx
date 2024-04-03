import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { FormEvent, useState, ChangeEvent, InvalidEvent} from 'react';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content{
  type: 'paragraph' | 'link';
  content: string;
}

  interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
  }

export function Post({ author, publishedAt, content}: PostProps) {

  const [comments, setComments] = useState([
    'Post muito bacana, hein?'
  ])

    const [newCommentText, setNewCommentText] = useState('')


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
      locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent) {
      event.preventDefault()

      setComments([...comments, newCommentText]);
      setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
      event.target.setCustomValidity('');
      setNewCommentText(event.target.value);
    }

    function handNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
      event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete: string) {
      const commentsWithoutDeleteOne =  comments.filter(comment => {
        return comment !== commentToDelete;
      })

      setComments(commentsWithoutDeleteOne);
    }


    return (
        <article className={styles.post}>
          <header>
            <div className={styles.author}>
              <Avatar hasBorder src={author.avatarUrl}  />
                <div className={styles.authorInfo}>
                    <strong className={styles.name}>{author.name}</strong>
                    <span className={styles.name}>{author.role}</span>
                </div>
            </div>

            <time title="{publishedDateFormatted}" dateTime= {publishedAt.toISOString()}>
             {publishedDateRelativeToNow}
            </time>
          </header>



          <div className={styles.content}>
          {content.map(line => {
            if (line.type == 'paragraph') {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type == 'link') {
              return <p key={line.content}><a href="">{line.content}</a></p>
            }
          })}
          </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feeedback</strong>

        <textarea
        name="comment"
        placeholder='Deixe um comentário'
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handNewCommentInvalid}
        required
        />
          <footer>
            {
              newCommentText &&
              <button type='submit' disabled={newCommentText.length == 0}>
              Publicar
            </button>
            }
          </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (<Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment} />
          )
        })}
      </div>

        </article>
    )
}