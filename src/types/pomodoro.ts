export type TimerMode = 'work' | 'shortBreak' | 'longBreak';

export interface PomodoroSettings {
  workDuration: number; // in minutes
  shortBreakDuration: number;
  longBreakDuration: number;
  longBreakInterval: number; // after how many work sessions
  autoStartBreaks: boolean;
  autoStartWork: boolean;
  notificationsEnabled: boolean;
  soundEnabled: boolean;
  volume: number;
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  pomodorosCompleted: number;
  pomodorosTarget: number;
  createdAt: number;
}

export interface PomodoroSession {
  id: string;
  taskId?: string;
  mode: TimerMode;
  duration: number;
  completedAt: number;
  date: string; // YYYY-MM-DD format
}

export interface Statistics {
  sessions: PomodoroSession[];
  totalPomodoros: number;
  totalFocusTime: number; // in minutes
  todayPomodoros: number;
  weekPomodoros: number;
  monthPomodoros: number;
}
