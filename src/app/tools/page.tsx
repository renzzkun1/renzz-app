'use client';

import { useState } from 'react';
import { Wrench, Hash, Code2 } from 'lucide-react';

export default function ToolsPage() {
  const [base64Input, setBase64Input] = useState('');
  const [base64Output, setBase64Output] = useState('');

  const handleEncode = () => setBase64Output(btoa(base64Input));
  const handleDecode = () => {
    try { setBase64Output(atob(base64Input)); } catch { setBase64Output('Invalid Base64 format'); }
  };

  return (
    <div className="min-h-screen bg-renzz-navy text-slate-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <Wrench className="w-8 h-8 text-renzz-cyan" /> Renzz Mini Tools
          </h1>
          <p className="text-slate-400 text-sm mt-1">Kumpulan utility tools ringan untuk pengembang web.</p>
        </div>

        {/* TOOL 1: BASE64 ENCODER/DECODER */}
        <div className="p-6 rounded-2xl bg-renzz-card border border-slate-800 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Hash className="w-5 h-5 text-renzz-accent" /> Base64 Encoder / Decoder
          </h3>

          <textarea
            value={base64Input}
            onChange={(e) => setBase64Input(e.target.value)}
            placeholder="Masukkan teks di sini..."
            className="w-full h-24 p-3 rounded-xl bg-renzz-dark border border-slate-800 text-sm font-mono text-slate-200 focus:outline-none"
          />

          <div className="flex gap-3">
            <button onClick={handleEncode} className="px-4 py-2 rounded-lg bg-renzz-blue text-xs font-bold text-white">
              Encode
            </button>
            <button onClick={handleDecode} className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-bold text-slate-300">
              Decode
            </button>
          </div>

          {base64Output && (
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-400 break-all">
              {base64Output}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
