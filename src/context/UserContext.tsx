'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ACHIEVEMENTS_DATA } from '@/data/achievements';

interface UserState {
  xp: number;
  level: number;
  streak: number;
  completedLessons: string[];
  completedQuizzes: string[];
  savedItems: string[];
  unlockedAchievements: string[];
  addXp: (amount: number) => void;
  markLessonComplete: (id: string, xp: number) => void;
  toggleSaveItem: (id: string) => void;
}

const UserContext = createContext<UserState | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [xp, setXp] = useState<number>(0);
  const [streak, setStreak] = useState<number>(1);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);
  const [savedItems, setSavedItems] = useState<string[]>([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);

  useEffect(() => {
    const savedXp = localStorage.getItem('renzz_xp');
    const savedLessons = localStorage.getItem('renzz_lessons');
    const savedSaved = localStorage.getItem('renzz_saved');
    if (savedXp) setXp(parseInt(savedXp, 10));
    if (savedLessons) setCompletedLessons(JSON.parse(savedLessons));
    if (savedSaved) setSavedItems(JSON.parse(savedSaved));
  }, []);

  // Periksa achievement yang terbuka setiap XP bertambah
  useEffect(() => {
    const unlocked = ACHIEVEMENTS_DATA.filter((ach) => ach.requiredXp && xp >= ach.requiredXp).map(
      (ach) => ach.id
    );
    setUnlockedAchievements(unlocked);
  }, [xp]);

  const addXp = (amount: number) => {
    setXp((prev) => {
      const next = prev + amount;
      localStorage.setItem('renzz_xp', next.toString());
      return next;
    });
  };

  const markLessonComplete = (id: string, xpAmount: number) => {
    if (!completedLessons.includes(id)) {
      const updated = [...completedLessons, id];
      setCompletedLessons(updated);
      localStorage.setItem('renzz_lessons', JSON.stringify(updated));
      addXp(xpAmount);
    }
  };

  const toggleSaveItem = (id: string) => {
    let updated: string[];
    if (savedItems.includes(id)) {
      updated = savedItems.filter((item) => item !== id);
    } else {
      updated = [...savedItems, id];
    }
    setSavedItems(updated);
    localStorage.setItem('renzz_saved', JSON.stringify(updated));
  };

  // Setiap 100 XP = 1 Level
  const level = Math.floor(xp / 100) + 1;

  return (
    <UserContext.Provider
      value={{
        xp,
        level,
        streak,
        completedLessons,
        completedQuizzes,
        savedItems,
        unlockedAchievements,
        addXp,
        markLessonComplete,
        toggleSaveItem,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
}
