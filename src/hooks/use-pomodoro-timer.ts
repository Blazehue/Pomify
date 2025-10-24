"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { TimerMode, PomodoroSettings, PomodoroSession } from '@/types/pomodoro';
import { getSettings, showNotification, getTodayString } from '@/lib/pomodoro-utils';

export const usePomodoroTimer = (onSessionComplete?: (session: PomodoroSession) => void) => {
  const [settings, setSettings] = useState<PomodoroSettings>(getSettings());
  const [mode, setMode] = useState<TimerMode>('work');
  const [timeLeft, setTimeLeft] = useState(settings.workDuration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);
  const [currentTaskId, setCurrentTaskId] = useState<string | undefined>();
  
  const intervalRef = useRef<NodeJS.Timeout>();
  const audioRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    // Create audio element for notifications
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUKnn77RgGwU7k9n0xnMpBSh+zPLaizsKGGS56+mjUBELTKXh8bllHAU2jdXzzn0vBSF1xe/glEILElyx6OyrWBUIQ5zd8sFuIwUuhM/z3Ik3CBtpvfDknE4MDlCp5++zYBwFO5PZ9MZzKQUofszy2os7ChhluevrpFARDEyl4fG5ZRwFNo3V8859LwUhdcXv4JRCC xJcsevsq1kVCEOc3fLBbiMFLoTP89yJNwgbaL3w5JxODA5QqefvtGAcBTuT2fTGcykFKH7M8tqLOwoYZbnr66RQEQxMpeHxuWUcBTaN1fPOfS8FIXXF7+CUQgsRXLHr7KtZFQhDnN3ywW4jBS6Ez/PciTcIG2i98OScTgwOUKnn77RgHAU7k9n0xnMpBSh+zPLaizsKGGW56+ukUBEMTKXh8bllHAU2jdXzzn0vBSF1xe/glEILEVyx6+yrWRUIQ5zd8sFuIwUuhM/z3Ik3CBtovfDknE4MDlCp5++0YBwFO5PZ9MZzKQUofszy2os7ChhluevrpFARDEyl4fG5ZRwFNo3V8859LwUhdcXv4JRCC');
      audioRef.current.volume = settings.volume;
    }
  }, []);

  useEffect(() => {
    setSettings(getSettings());
  }, []);

  useEffect(() => {
    const duration = mode === 'work' 
      ? settings.workDuration 
      : mode === 'shortBreak' 
      ? settings.shortBreakDuration 
      : settings.longBreakDuration;
    
    setTimeLeft(duration * 60);
  }, [mode, settings]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimerComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  const handleTimerComplete = useCallback(() => {
    setIsRunning(false);
    
    // Play sound
    if (settings.soundEnabled && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }

    // Show notification
    if (settings.notificationsEnabled) {
      if (mode === 'work') {
        showNotification('Work Session Complete!', 'Time for a break.');
      } else {
        showNotification('Break Complete!', 'Ready to focus again?');
      }
    }

    // Save session
    if (mode === 'work') {
      const session: PomodoroSession = {
        id: Date.now().toString(),
        taskId: currentTaskId,
        mode,
        duration: settings.workDuration,
        completedAt: Date.now(),
        date: getTodayString(),
      };
      
      setCompletedPomodoros(prev => prev + 1);
      
      if (onSessionComplete) {
        onSessionComplete(session);
      }

      // Determine next mode
      const nextMode = (completedPomodoros + 1) % settings.longBreakInterval === 0 
        ? 'longBreak' 
        : 'shortBreak';
      
      setMode(nextMode);
      
      if (settings.autoStartBreaks) {
        setIsRunning(true);
      }
    } else {
      setMode('work');
      
      if (settings.autoStartWork) {
        setIsRunning(true);
      }
    }
  }, [mode, settings, completedPomodoros, currentTaskId, onSessionComplete]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    const duration = mode === 'work' 
      ? settings.workDuration 
      : mode === 'shortBreak' 
      ? settings.shortBreakDuration 
      : settings.longBreakDuration;
    setTimeLeft(duration * 60);
  };

  const switchMode = (newMode: TimerMode) => {
    setIsRunning(false);
    setMode(newMode);
  };

  const updateSettings = (newSettings: PomodoroSettings) => {
    setSettings(newSettings);
    if (audioRef.current) {
      audioRef.current.volume = newSettings.volume;
    }
  };

  const progress = (() => {
    const totalDuration = mode === 'work' 
      ? settings.workDuration * 60
      : mode === 'shortBreak' 
      ? settings.shortBreakDuration * 60
      : settings.longBreakDuration * 60;
    return ((totalDuration - timeLeft) / totalDuration) * 100;
  })();

  return {
    mode,
    timeLeft,
    isRunning,
    completedPomodoros,
    settings,
    progress,
    currentTaskId,
    setCurrentTaskId,
    start,
    pause,
    reset,
    switchMode,
    updateSettings,
  };
};
