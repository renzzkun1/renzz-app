'use client';

import { useState } from 'react';
import { QUIZZES_DATA } from '@/data/quizzes';
import { Zap, CheckCircle2, XCircle } from 'lucide-react';
import { useUser } from '@/context/UserContext';

export default function QuizPage() {
  const { addXp } = useUser();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentQuiz = QUIZZES_DATA[currentIndex];

  const handleOptionClick = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setShowResult(true);

    if (idx === currentQuiz.correctAnswer) {
      addXp(currentQuiz.xpReward);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowResult(false);
    setCurrentIndex((prev) => (prev + 1) % QUIZZES_DATA.length);
  };

  return (
    <div className="min-h-screen bg-renzz-navy text-slate-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <Zap className="w-8 h-8 text-amber-400" /> Renzz Quiz Hub
          </h1>
          <p className="text-slate-400 text-sm mt-1">Uji pengetahuan Anda seputar Coding, Tech, & Internet.</p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-renzz-card border border-slate-800 space-y-6">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-renzz-accent">Soal {currentIndex + 1} dari {QUIZZES_DATA.length}</span>
            <span className="text-amber-400">+{currentQuiz.xpReward} XP</span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-white">{currentQuiz.question}</h2>

          <div className="space-y-3">
            {currentQuiz.options.map((opt, idx) => {
              let btnStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-renzz-blue';
              if (selectedOption !== null) {
                if (idx === currentQuiz.correctAnswer) {
                  btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300';
                } else if (idx === selectedOption) {
                  btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-300';
                }
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleOptionClick(idx)}
                  className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all ${btnStyle}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                💡 Penjelasan: {currentQuiz.explanation}
              </p>
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-lg bg-renzz-blue text-white text-xs font-bold"
              >
                Soal Berikutnya
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
