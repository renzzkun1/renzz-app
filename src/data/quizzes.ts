import { QuizQuestion } from '@/types';

export const QUIZZES_DATA: QuizQuestion[] = [
  {
    id: 'q1',
    category: 'Coding',
    question: 'Tag HTML manakah yang digunakan untuk membuat judul terbesar?',
    options: ['<h6>', '<head>', '<h1>', '<header>'],
    correctAnswer: 2,
    explanation: 'Tag <h1> adalah heading tingkat utama dengan ukuran teks paling besar secara standar.',
    xpReward: 50
  },
  {
    id: 'q2',
    category: 'Coding',
    question: 'Keyword mana pada JavaScript yang nilainya TIDAK BISA diubah kembali?',
    options: ['let', 'var', 'const', 'static'],
    correctAnswer: 2,
    explanation: '`const` digunakan untuk mendeklarasikan variabel immutable (konstan).',
    xpReward: 50
  },
  {
    id: 'q3',
    category: 'Technology',
    question: 'Komponen hardware mana yang sering disebut sebagai "Otak" komputer?',
    options: ['RAM', 'GPU', 'CPU', 'SSD'],
    correctAnswer: 2,
    explanation: 'CPU (Central Processing Unit) mengeksekusi semua logika dan perhitungan pada komputer.',
    xpReward: 50
  },
  {
    id: 'q4',
    category: 'Gaming',
    question: 'Apa kepanjangan dari istilah "FPS" dalam konteks performa game graphics?',
    options: ['First Person Shooter', 'Frames Per Second', 'Fast Processing System', 'File Path Storage'],
    correctAnswer: 1,
    explanation: 'Frames Per Second mengukur berapa banyak bingkai gambar yang dapat ditampilkan layar per detik.',
    xpReward: 50
  },
  {
    id: 'q5',
    category: 'Internet',
    question: 'Protokol mana yang berfungsi menerjemahkan nama domain (contoh: renzz.com) menjadi IP Address?',
    options: ['HTTP', 'DNS', 'FTP', 'SMTP'],
    correctAnswer: 1,
    explanation: 'DNS (Domain Name System) bertindak sebagai buku telepon internet.',
    xpReward: 50
  },
  {
    id: 'q6',
    category: 'Social Media',
    question: 'Faktor utama yang biasanya mendorong algoritma TikTok menyebarkan konten ke FYP adalah...',
    options: ['Jumlah teks di deskripsi', 'Watch time & Completion rate', 'Ukuran file video', 'Jam posting persis jam 12 malam'],
    correctAnswer: 1,
    explanation: 'Watch time (durasi tonton) dan completion rate (tingkat penyelesaian) adalah indikator utama minat penonton.',
    xpReward: 50
  }
];
