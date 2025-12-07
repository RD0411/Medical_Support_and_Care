export type Doctor = {
  id: string;
  name: string;
  speciality: string;
  experienceYears: number;
  languages: string;
  rating: number;
  feePerMin: number;
  avatarUrl: string;
  concerns: string[]; // concern ids
};

export const DOCTORS: Doctor[] = [
  {
    id: 'prem',
    name: 'Dr. Prem',
    speciality: 'Gynecology + 2 others',
    experienceYears: 7,
    languages: 'Hindi, English, Telugu',
    rating: 4.5,
    feePerMin: 15,
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    concerns: ['diabetes', 'hypertension', 'anxiety'],
  },
  {
    id: 'deepa',
    name: 'Dr. Deepa Godara',
    speciality: 'Orthodontist',
    experienceYears: 5,
    languages: 'Hindi, English',
    rating: 4.7,
    feePerMin: 20,
    avatarUrl: 'https://i.pravatar.cc/150?img=47',
    concerns: ['anxiety', 'obesity'],
  },
];
