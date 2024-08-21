'use client';

import { useState } from 'react';
import styles from '../app/styles/Home.module.css';

interface CommentFormProps {
  onAddComment: (comment: {
    name: string;
    comment: string;
    likes: number;
    reports: number;
  }) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddComment({ name, comment });
    setName('');
    setComment('');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.inputField}
        placeholder="Seu nome"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <textarea
        className={styles.textareaField}
        placeholder="Seu comentário"
        value={comment}
        onChange={e => setComment(e.target.value)}
        required
      ></textarea>
      <button type="submit" className={styles.button}>
        Enviar
      </button>
    </form>
  );
};

export default CommentForm;
