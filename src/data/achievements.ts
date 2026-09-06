import { Achievement } from '@/types';

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'first-code',
    title: '🏆 First Code',
    description: 'Menyelesaikan materi coding pertama kamu.',
    icon: 'Terminal',
    requiredXp: 20
  },
  {
    id: 'bug-hunter',
    title: '🐛 Bug Hunter',
    description: 'Memperbaiki bug pertama di Coding Games.',
    icon: 'Bug',
    requiredXp: 50
  },
  {
    id: 'js-explorer',
    title: '⚡ JavaScript Explorer',
    description: 'Mencapai Level 3 dan menguasai dasar JS.',
    icon: 'Zap',
    requiredXp: 200
  },
  {
    id: 'quiz-master',
    title: '🧠 Quiz Master',
    description: 'Mengumpulkan total 300+ XP dari kuis & tantangan.',
    icon: 'Award',
    requiredXp: 300
  },
  {
    id: 'code-warrior',
    title: '🛡️ Code Warrior',
    description: 'Mencapai Level 5 (Advanced Learner).',
    icon: 'Shield',
    requiredXp: 500
  }
];
