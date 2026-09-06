'use client';

import { ARTICLES_DATA } from '@/data/articles';
import { Compass, Bookmark } from 'lucide-react';
import { useUser } from '@/context/UserContext';

export default function ExplorePage() {
  const { savedItems, toggleSaveItem } = useUser();

  return (
    <div className="min-h-screen bg-renzz-navy text-slate-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <Compass className="w-8 h-8 text-renzz-accent" /> Knowledge Hub
          </h1>
          <p className="text-slate-400 text-sm mt-1">Eksplorasi wawasan seputar teknologi, algoritma, dan dunia digital.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARTICLES_DATA.map((art) => {
            const isSaved = savedItems.includes(art.id);

            return (
              <div key={art.id} className="p-6 rounded-2xl bg-renzz-card border border-slate-800 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 rounded-full bg-slate-800 text-renzz-cyan text-[10px] font-mono font-bold uppercase">
                      {art.category}
                    </span>
                    <button
                      onClick={() => toggleSaveItem(art.id)}
                      className="text-slate-500 hover:text-amber-400"
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-400 text-amber-400' : ''}`} />
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{art.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{art.summary}</p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <span>Waktu baca: {art.readTime}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
