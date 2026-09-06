'use client';

import { useState } from 'react';
import { LESSONS_DATA } from '@/data/lessons';
import { CheckCircle2, Lock, BookOpen, Award, ArrowRight } from 'lucide-react';
import { useUser } from '@/context/UserContext';

export default function LearnPage() {
  const { completedLessons, markLessonComplete } = useUser();
  const [activeLesson, setActiveLesson] = useState(LESSONS_DATA[0]);

  const levels = [0, 1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen bg-renzz-navy text-slate-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* ROADMAP SIDEBAR (5 COLS) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">Learn Coding Roadmap</h1>
            <p className="text-slate-400 text-sm mt-1">Pilih materi belajar dari Level 0 hingga Advanced.</p>
          </div>

          <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
            {levels.map((lvl) => {
              const lvlLessons = LESSONS_DATA.filter((l) => l.level === lvl);
              if (lvlLessons.length === 0) return null;

              return (
                <div key={lvl} className="p-4 rounded-xl bg-renzz-card border border-slate-800">
                  <div className="font-mono text-xs font-bold text-renzz-accent uppercase mb-3 flex items-center justify-between">
                    <span>Level {lvl} — {lvlLessons[0].category}</span>
                    <span className="text-slate-500">{lvlLessons.length} Lessons</span>
                  </div>

                  <div className="space-y-2">
                    {lvlLessons.map((item) => {
                      const isDone = completedLessons.includes(item.id);
                      const isActive = activeLesson.id === item.id;

                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveLesson(item)}
                          className={`w-full text-left p-3 rounded-lg border text-sm transition-all flex items-center justify-between ${
                            isActive
                              ? 'bg-renzz-blue/20 border-renzz-accent text-white'
                              : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {isDone ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            ) : (
                              <BookOpen className="w-4 h-4 text-slate-500 shrink-0" />
                            )}
                            <span className="font-medium line-clamp-1">{item.title}</span>
                          </div>
                          <span className="text-xs font-mono text-amber-400 shrink-0">+{item.xpReward} XP</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* LESSON VIEWER MAIN (7 COLS) */}
        <div className="lg:col-span-7">
          <div className="sticky top-20 p-6 sm:p-8 rounded-2xl bg-renzz-card border border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-renzz-blue/20 text-renzz-accent text-xs font-mono font-bold">
                Level {activeLesson.level} • {activeLesson.category}
              </span>
              <span className="text-xs font-mono text-amber-400 flex items-center gap-1">
                <Award className="w-4 h-4" /> +{activeLesson.xpReward} XP Reward
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">{activeLesson.title}</h2>
              <p className="text-slate-400 text-sm mt-1">{activeLesson.description}</p>
            </div>

            <hr className="border-slate-800" />

            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{activeLesson.content}</p>
            </div>

            <div className="pt-6 flex items-center justify-between border-t border-slate-800">
              <span className="text-xs text-slate-500 font-mono">ID: {activeLesson.id}</span>
              
              <button
                onClick={() => markLessonComplete(activeLesson.id, activeLesson.xpReward)}
                disabled={completedLessons.includes(activeLesson.id)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  completedLessons.includes(activeLesson.id)
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-gradient-to-r from-renzz-blue to-renzz-cyan text-white hover:opacity-90 shadow-md'
                }`}
              >
                {completedLessons.includes(activeLesson.id) ? 'Selesai (Completed)' : 'Tandai Selesai & Klaim XP'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
