'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface MoodChartProps {
  moodCounts: {
    Desmotivado: number;
    Estressado: number;
    Ansioso: number;
    Normal: number;
    Feliz: number;
  };
}

const MoodChart: React.FC<MoodChartProps> = ({ moodCounts }) => {
  const data = {
    labels: ['Desmotivado', 'Estressado', 'Ansioso', 'Normal', 'Feliz'],
    datasets: [
      {
        label: 'Humores',
        data: [
          moodCounts.Desmotivado,
          moodCounts.Estressado,
          moodCounts.Ansioso,
          moodCounts.Normal,
          moodCounts.Feliz,
        ],
        backgroundColor: [
          'rgba(22, 162, 255, 0.20)',
          'rgba(235, 54, 54,  0.20)',
          'rgba(255, 117, 4,  0.20)',
          'rgba(82, 184, 104, 0.20)',
          'rgba(255, 232, 29, 0.20)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.20)',
          'rgba(54, 162, 235, 0.20)',
          'rgba(255, 206, 86, 0.20)',
          '#c71e1e',
          'rgba(153, 102, 255, 0.20)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default MoodChart;
