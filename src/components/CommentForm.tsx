import { useState } from 'react';
import { Comment } from '../app/type';
import styles from '../app/styles/Home.module.css';
interface CommentFormProps {
  onAddComment: (comment: Comment) => void; // Corrigido para usar o tipo Comment
}

export default function CommentForm({ onAddComment }: CommentFormProps) {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: Comment = {
      id: Date.now(), // Exemplo de geração de ID simples
      name,
      comment: commentText,
      likes: 0,
      reports: 0,
    };
    onAddComment(newComment);
    setName('');
    setCommentText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.inputField}
        type="text"
        placeholder="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <textarea
        className={styles.textareaField}
        placeholder="FeedBack"
        value={commentText}
        onChange={e => setCommentText(e.target.value)}
        required
      />
      <button type="submit" className={styles.button}>
        Enviar
      </button>
    </form>
  );
}
