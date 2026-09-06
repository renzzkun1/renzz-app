'use client';

import { useUser } from '@/context/UserContext';
import { ACHIEVEMENTS_DATA } from '@/data/achievements';
import { Award, Flame, BookOpen, Bookmark, Shield, CheckCircle2, Lock, Trophy } from 'lucide-react';

export default function ProfilePage() {
  const { xp, level, streak, completedLessons, savedItems, unlockedAchievements } = useUser();

  // Perhitungan XP untuk Level berikutnya
  const currentLevelBaseXp = (level - 1) * 100;
  const nextLevelXp = level * 100;
  const progressInLevel = xp - currentLevelBaseXp;
  const progressPercent = Math.min(Math.max((progressInLevel / 100) * 100, 0), 100);

  // Mock Leaderboard
  const leaderboard = [
    { rank: 1, name: 'CyberRenzz', level: 14, xp: 1350 },
    { rank: 2, name: 'Kamu (You)', level: level, xp: xp },
    { rank: 3, name: 'DevNusantara', level: 8, xp: 780 },
    { rank: 4, name: 'ByteMaster', level: 5, xp: 420 },
  ].sort((a, b) => b.xp - a.xp);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-200 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* PROFILE CARD WITH EXP BAR */}
        <div className="renzz-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 flex items-center justify-center font-black text-2xl sm:text-3xl text-white shadow-md">
              R
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white">Digital Explorer</h1>
              <p className="text-xs font-mono text-sky-400 mt-1">Level {level} Learner</p>
            </div>
          </div>

          {/* XP PROGRESS BAR */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-slate-400">
              <span>EXP: {xp} XP</span>
              <span>Next Level: {nextLevelXp} XP</span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-900 border border-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* STATS OVERVIEW */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="renzz-card p-4 rounded-xl text-center">
            <Award className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <div className="text-lg font-bold font-mono text-white">{xp}</div>
            <div className="text-xs text-slate-400">Total XP</div>
          </div>
          <div className="renzz-card p-4 rounded-xl text-center">
            <Flame className="w-5 h-5 text-rose-400 mx-auto mb-1" />
            <div className="text-xl font-bold font-mono text-white">{streak} Hari</div>
            <div className="text-xs text-slate-400">Streak Belajar</div>
          </div>
          <div className="renzz-card p-4 rounded-xl text-center">
            <BookOpen className="w-5 h-5 text-sky-400 mx-auto mb-1" />
            <div className="text-xl font-bold font-mono text-white">{completedLessons.length}</div>
            <div className="text-xs text-slate-400">Materi Selesai</div>
          </div>
          <div className="renzz-card p-4 rounded-xl text-center">
            <Bookmark className="w-5 h-5 text-indigo-400 mx-auto mb-1" />
            <div className="text-xl font-bold font-mono text-white">{savedItems.length}</div>
            <div className="text-xs text-slate-400">Tersimpan</div>
          </div>
        </div>

        {/* ACHIEVEMENTS / BADGES UNLOCKED */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-sky-400" /> Achievements & Badges
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ACHIEVEMENTS_DATA.map((ach) => {
              const isUnlocked = unlockedAchievements.includes(ach.id);

              return (
                <div
                  key={ach.id}
                  className={`p-4 rounded-xl border flex items-center gap-4 transition-all ${
                    isUnlocked
                      ? 'bg-slate-900/80 border-sky-500/40 text-slate-200'
                      : 'bg-slate-950/40 border-white/5 text-slate-500'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${isUnlocked ? 'bg-sky-500/20 text-sky-400' : 'bg-slate-900 text-slate-600'}`}>
                    {isUnlocked ? <CheckCircle2 className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{ach.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{ach.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* LEADERBOARD LOKAL */}
        <div className="renzz-card p-6 rounded-2xl border border-white/10 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" /> Local Leaderboard
          </h2>

          <div className="space-y-2">
            {leaderboard.map((user, idx) => (
              <div
                key={user.name}
                className={`p-3 rounded-xl flex items-center justify-between text-xs font-mono ${
                  user.name.includes('You')
                    ? 'bg-sky-500/20 border border-sky-500/40 text-white font-bold'
                    : 'bg-slate-900/60 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 text-slate-500">#{idx + 1}</span>
                  <span>{user.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sky-400">Lvl {user.level}</span>
                  <span className="text-amber-400">{user.xp} XP</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
