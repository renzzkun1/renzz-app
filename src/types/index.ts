export interface Lesson {
  id: string;
  level: number;
  category: 'Basics' | 'HTML' | 'CSS' | 'JS' | 'Python' | 'Advanced';
  title: string;
  description: string;
  content: string;
  xpReward: number;
}

export interface QuizQuestion {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  xpReward: number;
}

export interface Article {
  id: string;
  title: string;
  category: 'coding' | 'technology' | 'gaming' | 'internet' | 'social_media' | 'world';
  readTime: string;
  summary: string;
  content: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requiredXp?: number;
}
