'use client';

import Link from 'next/link';
import { Terminal, Code, Cpu, ShieldCheck, Sparkles, ArrowRight, Zap, Trophy, Rocket } from 'lucide-react';
import DailyChallenge from '@/components/DailyChallenge';

export default function Home() {
  return (
    <div className="min-h-screen bg-renzz-navy text-slate-100 flex flex-col">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden border-b border-slate-800/80">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-renzz-blue/20 via-renzz-cyan/20 to-renzz-purple/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-renzz-accent mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Platform Belajar & Tech Playground Modern
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Selamat Datang di <span className="bg-gradient-to-r from-renzz-accent via-renzz-cyan to-renzz-purple bg-clip-text text-transparent">RENZZ</span>
          </h1>
          
          <p className="mt-4 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Satu tempat untuk belajar coding dari nol, memahami ekosistem teknologi modern, bermain game edukasi, dan mengasah pengetahuan digital.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/learn"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-renzz-blue to-renzz-cyan font-bold text-white shadow-lg shadow-renzz-blue/25 hover:opacity-95 transition-all flex items-center gap-2"
            >
              <Rocket className="w-5 h-5" /> Mulai Belajar
            </Link>
            <Link
              href="/explore"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold text-slate-200 border border-slate-700 transition-all flex items-center gap-2"
            >
              Jelajahi Renzz <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* CODE / TERMINAL PREVIEW CARD */}
          <div className="mt-12 max-w-3xl mx-auto rounded-2xl bg-renzz-dark border border-slate-800 p-4 text-left shadow-2xl font-mono text-xs sm:text-sm text-slate-300 relative group">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-800">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="text-slate-500 text-xs ml-2">renzz-universe.js</span>
            </div>
            <pre className="overflow-x-auto text-sky-300">
              <code>{`const user = {
  name: "Future Developer",
  status: "Learning",
  motto: "Learn. Create. Explore."
};

function startJourney() {
  console.log("Welcome to Renzz Platform!");
  return user.motto;
}

startJourney();`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* DAILY CHALLENGE & FEATURED HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 py-12 w-full space-y-12">
        <DailyChallenge />

        {/* CORE FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-renzz-card border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-xl bg-renzz-blue/20 text-renzz-accent flex items-center justify-center mb-4">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Learn Coding</h3>
            <p className="text-slate-400 text-sm">
              Roadmap terstruktur dari Level 0 dasar komputer hingga HTML, CSS, JS, Python, dan Advanced Tech.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-renzz-card border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-xl bg-renzz-purple/20 text-renzz-purple flex items-center justify-center mb-4">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Code Playground</h3>
            <p className="text-slate-400 text-sm">
              Tulis kode HTML/CSS/JS secara langsung dan lihat hasilnya secara instan tanpa perlu menginstall tools tambahan.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-renzz-card border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-xl bg-renzz-cyan/20 text-renzz-cyan flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Games & Quizzes</h3>
            <p className="text-slate-400 text-sm">
              Asah kemampuan coding dengan cara menyenangkan melalui Bug Hunter, Quiz interaktif, dan kumpulkan XP.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
