// types.ts
export type MoodKey =
  | 'Triste'
  | 'Raiva'
  | 'Ansioso'
  | 'Normal'
  | 'Feliz'
  | 'Desmotivado'
  | 'Estressado';

export interface MoodCounts {
  [key: string]: number; // Isso permite que qualquer string seja usada como uma chave
  Triste: number;
  Raiva: number;
  Ansioso: number;
  Normal: number;
  Feliz: number;
  Desmotivado: number;
  Estressado: number;
}

export interface Comment {
  id: number;
  name: string;
  comment: string;
  likes: number;
  reports: number;
}
