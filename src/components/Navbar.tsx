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
    <nav className="sticky top-0 z-50 bg-renzz-navy/80 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-renzz-blue via-renzz-cyan to-renzz-purple flex items-center justify-center font-black text-xl tracking-wider shadow-lg shadow-renzz-cyan/20 group-hover:scale-105 transition-transform">
              R
            </div>
            <span className="font-extrabold text-xl tracking-wider bg-gradient-to-r from-white via-sky-200 to-renzz-accent bg-clip-text text-transparent">
              RENZZ
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  <Icon className="w-4 h-4 text-renzz-accent" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Gamification Stats & Profile Badge */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold">
              <span className="flex items-center gap-1 text-amber-400">
                <Flame className="w-4 h-4 fill-amber-400" />
                {streak} Day
              </span>
              <span className="w-px h-3 bg-slate-700" />
              <span className="text-renzz-cyan font-mono">Lvl {level}</span>
              <span className="w-px h-3 bg-slate-700" />
              <span className="text-renzz-purple font-mono">{xp} XP</span>
            </div>

            <Link
              href="/profile"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <User className="w-5 h-5 text-renzz-accent" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-renzz-dark px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800"
              >
                <Icon className="w-5 h-5 text-renzz-cyan" />
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
            <span>Level: {level}</span>
            <span>XP: {xp}</span>
            <span>Streak: {streak}d</span>
            <Link href="/profile" onClick={() => setMobileMenuOpen(false)} className="text-renzz-accent underline">
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
