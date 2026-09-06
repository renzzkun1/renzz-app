'use client';

import { useState } from 'react';
import { Award, CheckCircle2, Sparkles } from 'lucide-react';
import { useUser } from '@/context/UserContext';

export default function DailyChallenge() {
  const { addXp } = useUser();
  const [completed, setCompleted] = useState(false);

  const handleClaim = () => {
    if (!completed) {
      addXp(100);
      setCompleted(true);
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-gradient-to-r from-renzz-card via-slate-800 to-renzz-card border border-renzz-blue/30 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-renzz-cyan/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-renzz-accent text-xs font-mono font-bold tracking-wider uppercase mb-1">
            <Sparkles className="w-4 h-4" /> Today's Challenge
          </div>
          <h3 className="text-lg font-bold text-white">
            « Buat sebuah tombol HTML sederhana yang berubah warna saat kursor di-hover »
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Gunakan Playground untuk mempraktekkan sintaks CSS `:hover`!
          </p>
        </div>

        <button
          onClick={handleClaim}
          disabled={completed}
          className={`px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
            completed
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 cursor-default'
              : 'bg-gradient-to-r from-renzz-blue to-renzz-cyan text-white hover:opacity-90 shadow-lg shadow-renzz-blue/20'
          }`}
        >
          {completed ? (
            <>
              <CheckCircle2 className="w-4 h-4" /> +100 XP Claimed
            </>
          ) : (
            <>
              <Award className="w-4 h-4" /> Selesaikan & Klaim +100 XP
            </>
          )}
        </button>
      </div>
    </div>
  );
}
