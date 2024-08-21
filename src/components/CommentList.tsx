'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Like from '../images/thumbs-up-solid.svg';
import Report from '../images/flag-solid.svg';
import styles from '../app/styles/Home.module.css';
interface Comment {
  id: number;
  name: string;
  comment: string;
  likes: number;
  reports: number;
}

interface CommentListProps {
  comments: Comment[];
  onUpdateComments: (comments: Comment[]) => void;
}

const CommentList: React.FC<CommentListProps> = ({
  comments,
  onUpdateComments,
}) => {
  const handleLike = (id: number) => {
    const updatedComments = comments.map(comment =>
      comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
    );
    onUpdateComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  const handleReport = (id: number) => {
    const updatedComments = comments.map(comment =>
      comment.id === id ? { ...comment, reports: comment.reports + 1 } : comment
    );
    onUpdateComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  const handleRemove = (id: number) => {
    const updatedComments = comments.filter(comment => comment.id !== id);
    onUpdateComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  return (
    <div>
      {comments.map(comment => (
        <div
          key={comment.id}
          style={{
            marginBottom: '20px',

            paddingBottom: '10px',
          }}
          className={styles.comment}
        >
          <p className={styles.InputComment}>
            <strong style={{ textTransform: 'uppercase' }}>
              {comment.name}
            </strong>
          </p>
          <p className={styles.InputComment}>{comment.comment}</p>
          <div
            style={{
              display: 'flex',
              gap: '30px',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <button
              style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
              }}
              onClick={() => handleLike(comment.id)}
            >
              <Image src={Like} width={15} height={15} alt="Like" />
              {comment.likes}
            </button>
            <button
              onClick={() => {
                if (confirm('Você quer reportar ou remover este comentário?')) {
                  const action = prompt(
                    'Digite "report" para reportar ou "remove" para remover:'
                  );
                  if (action === 'report') {
                    handleReport(comment.id);
                  } else if (action === 'remove') {
                    handleRemove(comment.id);
                  }
                }
              }}
            >
              <Image src={Report} width={15} height={15} alt="Report" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
