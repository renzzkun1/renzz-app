'use client';

import { useState } from 'react';
import { Play, RotateCcw, Copy, Download } from 'lucide-react';

export default function PlaygroundPage() {
  const [html, setHtml] = useState<string>('<div class="box">\n  <h1>Hello RENZZ!</h1>\n  <p>Selamat mencoba Code Playground.</p>\n</div>');
  const [css, setCss] = useState<string>('body { background: #0b0f19; color: #38bdf8; font-family: sans-serif; padding: 20px; }\n.box { border: 1px solid #1e293b; padding: 15px; border-radius: 8px; }');
  const [js, setJs] = useState<string>('console.log("RENZZ Playground Active!");');
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');

  const srcDoc = `
    <!DOCTYPE html>
    <html>
      <head><style>${css}</style></head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <div className="min-h-screen bg-renzz-navy text-slate-100 p-4 sm:p-6 flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Code Playground</h1>
          <p className="text-xs text-slate-400">Tulis HTML, CSS, & JS langsung di browser.</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => { setHtml(''); setCss(''); setJs(''); }}
            className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 hover:bg-slate-700 flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
          <button
            onClick={() => navigator.clipboard.writeText(`${html}\n<style>\n${css}\n</style>\n<script>\n${js}\n</script>`)}
            className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 hover:bg-slate-700 flex items-center gap-1.5"
          >
            <Copy className="w-3.5 h-3.5" /> Copy Code
          </button>
        </div>
      </div>

      {/* EDITOR & PREVIEW GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
        
        {/* EDITOR PANEL */}
        <div className="flex flex-col rounded-xl bg-renzz-card border border-slate-800 overflow-hidden min-h-[350px]">
          <div className="flex items-center border-b border-slate-800 bg-slate-900/80">
            {(['html', 'css', 'js'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 text-xs font-mono uppercase font-bold border-b-2 transition-all ${
                  activeTab === tab
                    ? 'border-renzz-accent text-white bg-slate-800/50'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex-1 p-3 bg-renzz-dark">
            {activeTab === 'html' && (
              <textarea
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                className="w-full h-full min-h-[300px] bg-transparent font-mono text-sm text-sky-200 focus:outline-none resize-none"
              />
            )}
            {activeTab === 'css' && (
              <textarea
                value={css}
                onChange={(e) => setCss(e.target.value)}
                className="w-full h-full min-h-[300px] bg-transparent font-mono text-sm text-pink-300 focus:outline-none resize-none"
              />
            )}
            {activeTab === 'js' && (
              <textarea
                value={js}
                onChange={(e) => setJs(e.target.value)}
                className="w-full h-full min-h-[300px] bg-transparent font-mono text-sm text-emerald-300 focus:outline-none resize-none"
              />
            )}
          </div>
        </div>

        {/* LIVE PREVIEW PANEL */}
        <div className="flex flex-col rounded-xl bg-renzz-card border border-slate-800 overflow-hidden min-h-[350px]">
          <div className="px-4 py-2.5 border-b border-slate-800 bg-slate-900/80 text-xs font-mono font-bold text-slate-400">
            PREVIEW OUTPUT
          </div>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            className="w-full h-full bg-white min-h-[300px]"
          />
        </div>

      </div>
    </div>
  );
}
