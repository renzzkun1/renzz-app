'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Code2, Compass, Gamepad2, Wrench, BookOpen, User, Flame, Menu, X, Zap } from 'lucide-react';
import { useUser } from '@/context/UserContext';

export default function Navbar() {
  const { xp, level, streak } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/learn', label: 'Learn', icon: BookOpen },
    { href: '/playground', label: 'Playground', icon: Code2 },
    { href: '/games', label: 'Games', icon: Gamepad2 },
    { href: '/quiz', label: 'Quiz', icon: Zap },
    { href: '/explore', label: 'Explore', icon: Compass },
    { href: '/tools', label: 'Tools', icon: Wrench },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#090D16]/80 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Branding */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center font-black text-white text-base shadow-sm group-hover:scale-105 transition-all">
              R
            </div>
            <span className="font-extrabold text-lg tracking-wider text-white">
              RENZZ
            </span>
          </Link>

          {/* Navigasi Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-white/[0.05] transition-all"
                >
                  <Icon className="w-4 h-4 text-sky-400/80" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Profile & Stats Badge */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-white/10 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Flame className="w-3.5 h-3.5 fill-amber-400" />
                {streak}d
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-sky-400 font-mono">Lvl {level}</span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-indigo-400 font-mono">{xp} XP</span>
            </div>

            <Link
              href="/profile"
              className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all"
            >
              <User className="w-4 h-4 text-sky-400" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#090D16] px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/[0.05]"
              >
                <Icon className="w-4 h-4 text-sky-400" />
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
