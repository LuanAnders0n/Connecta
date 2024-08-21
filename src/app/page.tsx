'use client';

import { useState, useEffect } from 'react';
import MoodSelector from '../components/MoodSelector';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import MoodChart from '../components/MoodChart';
import styles from '../app/styles/Home.module.css';

export default function Home() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [moodCounts, setMoodCounts] = useState<MoodCounts>({
    Triste: 0,
    Raiva: 0,
    Ansioso: 0,
    Normal: 0,
    Feliz: 0,
  });

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    const storedMoodCounts = JSON.parse(
      localStorage.getItem('moodCounts') || '{}'
    ) || {
      Triste: 0,
      Raiva: 0,
      Ansioso: 0,
      Normal: 0,
      Feliz: 0,
    };
    setComments(storedComments);
    setMoodCounts(storedMoodCounts);
  }, []);

  const handleAddComment = (comment: Comment) => {
    const updatedComments = [
      ...comments,
      { ...comment, id: Date.now(), likes: 0, reports: 0 },
    ];
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  const handleUpdateComments = (updatedComments: Comment[]) => {
    setComments(updatedComments);
  };

  const handleSelectMood = (mood: string) => {
    const updatedMoodCounts = { ...moodCounts, [mood]: moodCounts[mood] + 1 };
    setMoodCounts(updatedMoodCounts);
    localStorage.setItem('moodCounts', JSON.stringify(updatedMoodCounts));
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Connecta</h1>
      </div>
      <div className={styles.texts}>
        <h4 className={styles.h4}>Como está se sentindo hoje?</h4>
        <h4 className={styles.h4}>Deixe seu feedback</h4>
      </div>

      <div className={styles.inputs}>
        <div>
          <MoodSelector onSelectMood={handleSelectMood} />
          <MoodChart moodCounts={moodCounts} />
        </div>

        <div>
          <CommentForm onAddComment={handleAddComment} />
          <CommentList
            comments={comments}
            onUpdateComments={handleUpdateComments}
          />
        </div>
      </div>
    </div>
  );
}
