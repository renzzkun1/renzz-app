'use client';

import { useUser } from '@/context/UserContext';
import { User, Award, Flame, BookOpen, Bookmark } from 'lucide-react';

export default function ProfilePage() {
  const { xp, level, streak, completedLessons, savedItems } = useUser();

  return (
    <div className="min-h-screen bg-renzz-navy text-slate-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* PROFILE HEADER CARD */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-renzz-card via-slate-800 to-renzz-card border border-slate-800 flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-renzz-blue via-renzz-cyan to-renzz-purple flex items-center justify-center font-black text-3xl text-white shadow-xl">
            R
          </div>
          <div>
            <h1 className="text-2xl font-black text-white">Code Explorer</h1>
            <p className="text-xs font-mono text-renzz-accent mt-1">Level {level} Developer</p>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-renzz-card border border-slate-800 text-center">
            <Award className="w-6 h-6 text-amber-400 mx-auto mb-1" />
            <div className="text-xl font-bold font-mono text-white">{xp}</div>
            <div className="text-xs text-slate-400">Total XP</div>
          </div>
          <div className="p-4 rounded-xl bg-renzz-card border border-slate-800 text-center">
            <Flame className="w-6 h-6 text-rose-500 mx-auto mb-1" />
            <div className="text-xl font-bold font-mono text-white">{streak} Hari</div>
            <div className="text-xs text-slate-400">Streak Belajar</div>
          </div>
          <div className="p-4 rounded-xl bg-renzz-card border border-slate-800 text-center">
            <BookOpen className="w-6 h-6 text-renzz-accent mx-auto mb-1" />
            <div className="text-xl font-bold font-mono text-white">{completedLessons.length}</div>
            <div className="text-xs text-slate-400">Materi Selesai</div>
          </div>
          <div className="p-4 rounded-xl bg-renzz-card border border-slate-800 text-center">
            <Bookmark className="w-6 h-6 text-renzz-purple mx-auto mb-1" />
            <div className="text-xl font-bold font-mono text-white">{savedItems.length}</div>
            <div className="text-xs text-slate-400">Tersimpan</div>
          </div>
        </div>

      </div>
    </div>
  );
}
