import { PomodoroSettings, PomodoroSession } from '@/types/pomodoro';

export const DEFAULT_SETTINGS: PomodoroSettings = {
  workDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  longBreakInterval: 4,
  autoStartBreaks: false,
  autoStartWork: false,
  notificationsEnabled: true,
  soundEnabled: true,
  volume: 0.5,
};

export const getSettings = (): PomodoroSettings => {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  
  const saved = localStorage.getItem('pomodoroSettings');
  if (saved) {
    try {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
    } catch {
      return DEFAULT_SETTINGS;
    }
  }
  return DEFAULT_SETTINGS;
};

export const saveSettings = (settings: PomodoroSettings) => {
  localStorage.setItem('pomodoroSettings', JSON.stringify(settings));
};

export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const getTodayString = (): string => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

export const getWeekStart = (): Date => {
  const date = new Date();
  const day = date.getDay();
  const diff = date.getDate() - day;
  return new Date(date.setDate(diff));
};

export const getMonthStart = (): Date => {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const filterSessionsByDateRange = (
  sessions: PomodoroSession[],
  startDate: Date,
  endDate: Date = new Date()
): PomodoroSession[] => {
  return sessions.filter(session => {
    const sessionDate = new Date(session.completedAt);
    return sessionDate >= startDate && sessionDate <= endDate;
  });
};

export const requestNotificationPermission = async (): Promise<boolean> => {
  if (!('Notification' in window)) return false;
  
  if (Notification.permission === 'granted') return true;
  
  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }
  
  return false;
};

export const showNotification = (title: string, body: string) => {
  if (Notification.permission === 'granted') {
    new Notification(title, {
      body,
      icon: '/favicon.ico',
      badge: '/favicon.ico',
    });
  }
};
