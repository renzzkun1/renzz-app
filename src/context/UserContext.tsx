'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ACHIEVEMENTS_DATA } from '@/data/achievements';

interface User {
  name: string;
  email: string;
  provider: 'google' | 'facebook' | 'email';
}

interface UserState {
  user: User | null;
  xp: number;
  level: number;
  streak: number;
  completedLessons: string[];
  completedQuizzes: string[];
  savedItems: string[];
  unlockedAchievements: string[];
  login: (userData: User) => void;
  logout: () => void;
  addXp: (amount: number) => void;
  markLessonComplete: (id: string, xp: number) => void;
  toggleSaveItem: (id: string) => void;
}

const UserContext = createContext<UserState | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [xp, setXp] = useState<number>(0);
  const [streak, setStreak] = useState<number>(1);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);
  const [savedItems, setSavedItems] = useState<string[]>([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('renzz_user');
    const savedXp = localStorage.getItem('renzz_xp');
    const savedLessons = localStorage.getItem('renzz_lessons');
    const savedSaved = localStorage.getItem('renzz_saved');

    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedXp) setXp(parseInt(savedXp, 10));
    if (savedLessons) setCompletedLessons(JSON.parse(savedLessons));
    if (savedSaved) setSavedItems(JSON.parse(savedSaved));
  }, []);

  useEffect(() => {
    const unlocked = ACHIEVEMENTS_DATA.filter((ach) => ach.requiredXp && xp >= ach.requiredXp).map(
      (ach) => ach.id
    );
    setUnlockedAchievements(unlocked);
  }, [xp]);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('renzz_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('renzz_user');
  };

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

  const level = Math.floor(xp / 100) + 1;

  return (
    <UserContext.Provider
      value={{
        user,
        xp,
        level,
        streak,
        completedLessons,
        completedQuizzes,
        savedItems,
        unlockedAchievements,
        login,
        logout,
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
