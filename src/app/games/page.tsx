'use client';

import { useState } from 'react';
import { Gamepad2, Play, ArrowLeft, RotateCcw, X } from 'lucide-react';
import Link from 'next/link';

export default function GamesPage() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-200 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                <Gamepad2 className="w-6 h-6 text-sky-400" /> RENZZ Games Arcade
              </h1>
              <p className="text-xs text-slate-400">Pilih game edukasi dan RPG untuk dimainkan secara langsung.</p>
            </div>
          </div>
        </div>

        {/* JIKA BELUM MEMILIH GAME (TAMPILAN MENU TOMBOL & GAMBAR) */}
        {!activeGame ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
            
            {/* CARD GAME RPG */}
            <div className="renzz-card rounded-2xl border border-white/10 overflow-hidden group hover:border-sky-500/50 transition-all flex flex-col">
              
              {/* GAMBAR BANNER GAME */}
              <div className="relative h-44 bg-gradient-to-tr from-slate-900 via-sky-950 to-indigo-900 flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">⚔️</span>
                <div className="absolute top-3 right-3 bg-sky-500/20 border border-sky-500/40 text-sky-300 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                  Action RPG
                </div>
              </div>

              {/* DESKRIPSI GAME */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                    RENZZ RPG — Lost Realm
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-3">
                    Game Action RPG turn-based penuh. Kalahkan monster, tingkatkan level, beli gear di Shop, dan kalahkan Ancient Dragon!
                  </p>
                </div>

                {/* TOMBOL UNTUK MULAI GAME */}
                <button
                  onClick={() => setActiveGame('/rpg.html')}
                  className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
                >
                  <Play className="w-4 h-4 fill-white" /> Play Game
                </button>
              </div>

            </div>

          </div>
        ) : (
          /* JIKA TOMBOL DIKLIK (PLAY MODE / IFRAME FULLSCREEN) */
          <div className="space-y-4">
            
            {/* BAR CONTROL GAME */}
            <div className="flex items-center justify-between bg-slate-900/90 p-3 rounded-xl border border-white/10 backdrop-blur-md">
              <span className="text-xs font-bold text-sky-400 flex items-center gap-2">
                🎮 Playing: RENZZ RPG
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const iframe = document.getElementById('game-frame') as HTMLIFrameElement;
                    if (iframe) iframe.src = iframe.src;
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1.5 border border-white/10"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Restart
                </button>

                <button
                  onClick={() => setActiveGame(null)}
                  className="px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 text-xs font-bold flex items-center gap-1"
                >
                  <X className="w-4 h-4" /> Keluar
                </button>
              </div>
            </div>

            {/* SCREEN GAME IFRAME */}
            <div className="w-full h-[650px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <iframe
                id="game-frame"
                src={activeGame}
                className="w-full h-full border-0"
                title="RENZZ Game Play"
              />
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
