'use client';

import Link from 'next/link';
import { Terminal, Code, Trophy, ArrowRight, Rocket, Sparkles } from 'lucide-react';
import DailyChallenge from '@/components/DailyChallenge';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-200 flex flex-col">
      
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-medium text-sky-400">
            <Sparkles className="w-3.5 h-3.5" /> Digital Knowledge Platform & Playground
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Belajar Coding & Teknologi <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Dengan Cara Interaktif
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Satu tempat untuk mempelajari pemrograman dari dasar, menguji logika lewat game edukasi, dan menjelajahi wawasan teknologi digital.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Link
              href="/learn"
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 font-semibold text-white text-sm shadow-sm transition-all flex items-center gap-2"
            >
              <Rocket className="w-4 h-4" /> Mulai Belajar
            </Link>
            <Link
              href="/explore"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 font-semibold text-slate-300 text-sm border border-white/10 transition-all flex items-center gap-2"
            >
              Jelajahi Renzz <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* CODE EDITOR PREVIEW */}
          <div className="pt-8 max-w-2xl mx-auto">
            <div className="renzz-card rounded-2xl p-4 text-left font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-slate-500 text-[11px] ml-2">renzz.config.js</span>
              </div>
              <pre className="text-sky-300 overflow-x-auto">
<code>{`const renzz = {
  mission: "Learn. Create. Explore.",
  status: "Ready to Code",
  level: "Beginner to Advanced"
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-20 w-full space-y-10">
        <DailyChallenge />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="renzz-card p-6 rounded-2xl transition-all">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">Learn Coding</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Materi terstruktur dari Level 0 dasar komputer hingga HTML, CSS, JS, dan Python.
            </p>
          </div>

          <div className="renzz-card p-6 rounded-2xl transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">Code Playground</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Tulis dan jalankan HTML/CSS/JS secara langsung tanpa setup lingkungan tambahan.
            </p>
          </div>

          <div className="renzz-card p-6 rounded-2xl transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">Gamified Knowledge</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Tingkatkan XP dan Level dengan menyelesaikan kuis interaktif dan tantangan harian.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
