'use client';

import { useState } from 'react';
import { Gamepad2, Bug, CheckCircle, RefreshCw } from 'lucide-react';
import { useUser } from '@/context/UserContext';

export default function GamesPage() {
  const { addXp } = useUser();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Sample Bug Hunter Challenge
  const bugChallenge = {
    title: 'Bug Hunter Level 1',
    codeSnippet: `function calculateTotal(price, tax) {\n  return price + tax\n}`,
    question: 'Di mana letak bug atau potensi kesalahan sintaks pada kode JavaScript di atas?',
    options: [
      'Tidak ada keyword return',
      'Kurang titik koma (Semicolon) di akhir statement (opsional namun recommended)',
      'Variabel price harus bernilai string',
      'Function tidak memiliki nama'
    ],
    correctIndex: 1,
    xp: 50
  };

  const handleSelect = (idx: number) => {
    setSelectedAnswer(bugChallenge.options[idx]);
    if (idx === bugChallenge.correctIndex) {
      setIsCorrect(true);
      addXp(bugChallenge.xp);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="min-h-screen bg-renzz-navy text-slate-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <Gamepad2 className="w-8 h-8 text-renzz-cyan" /> Renzz Coding Games
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Bermain mini-game edukatif untuk menguji ketelitian dan kemampuan debugging Anda.
          </p>
        </div>

        {/* GAME CARD */}
        <div className="p-6 sm:p-8 rounded-2xl bg-renzz-card border border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 font-mono text-xs font-bold">
              <Bug className="w-4 h-4" /> {bugChallenge.title}
            </span>
            <span className="text-xs font-mono text-amber-400">+{bugChallenge.xp} XP</span>
          </div>

          <div className="p-4 rounded-xl bg-renzz-dark border border-slate-800 font-mono text-sm text-rose-300">
            <pre>{bugChallenge.codeSnippet}</pre>
          </div>

          <p className="text-slate-200 font-medium">{bugChallenge.question}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bugChallenge.options.map((opt, idx) => (
              <button
                key={opt}
                onClick={() => handleSelect(idx)}
                disabled={isCorrect !== null}
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-renzz-cyan text-left text-sm text-slate-300 transition-all"
              >
                {opt}
              </button>
            ))}
          </div>

          {isCorrect === true && (
            <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Tepat sekali! Anda mendapatkan +{bugChallenge.xp} XP!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
