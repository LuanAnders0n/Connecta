'use client';

interface MoodSelectorProps {
  onSelectMood: (mood: string) => void;
}

const moods = [
  { label: 'Desmotivado', emoji: '😢' },
  { label: 'Estressado', emoji: '😡' },
  { label: 'Ansioso', emoji: '😰' },
  { label: 'Normal', emoji: '😐' },
  { label: 'Feliz', emoji: '😄' },
];

const MoodSelector: React.FC<MoodSelectorProps> = ({ onSelectMood }) => {
  const handleMoodClick = (mood: string) => {
    onSelectMood(mood);
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '800px',
      }}
    >
      {moods.map(mood => (
        <button
          key={mood.label}
          onClick={() => handleMoodClick(mood.label)}
          style={{
            fontSize: '2rem',
            padding: '10px',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
          }}
        >
          {mood.emoji}
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;
