"use client";

import { useState, useEffect } from 'react';
import { PomodoroSession, Statistics } from '@/types/pomodoro';
import { getTodayString, getWeekStart, getMonthStart, filterSessionsByDateRange } from '@/lib/pomodoro-utils';

const STORAGE_KEY = 'pomodoroSessions';

export const useStatistics = () => {
  const [sessions, setSessions] = useState<PomodoroSession[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setSessions(JSON.parse(saved));
      } catch {
        setSessions([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  }, [sessions]);

  const addSession = (session: PomodoroSession) => {
    setSessions(prev => [session, ...prev]);
  };

  const getStatistics = (): Statistics => {
    const workSessions = sessions.filter(s => s.mode === 'work');
    const today = getTodayString();
    const weekStart = getWeekStart();
    const monthStart = getMonthStart();

    const todaySessions = workSessions.filter(s => s.date === today);
    const weekSessions = filterSessionsByDateRange(workSessions, weekStart);
    const monthSessions = filterSessionsByDateRange(workSessions, monthStart);

    const totalFocusTime = workSessions.reduce((sum, s) => sum + s.duration, 0);

    return {
      sessions,
      totalPomodoros: workSessions.length,
      totalFocusTime,
      todayPomodoros: todaySessions.length,
      weekPomodoros: weekSessions.length,
      monthPomodoros: monthSessions.length,
    };
  };

  const getDailyStats = (days: number = 7) => {
    const stats: { date: string; count: number; minutes: number }[] = [];
    const today = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateString = date.toISOString().split('T')[0];

      const daySessions = sessions.filter(s => s.date === dateString && s.mode === 'work');
      stats.push({
        date: dateString,
        count: daySessions.length,
        minutes: daySessions.reduce((sum, s) => sum + s.duration, 0),
      });
    }

    return stats;
  };

  const clearAllSessions = () => {
    setSessions([]);
  };

  return {
    sessions,
    addSession,
    getStatistics,
    getDailyStats,
    clearAllSessions,
  };
};
