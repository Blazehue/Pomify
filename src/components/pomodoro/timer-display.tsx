"use client";

import { formatTime } from '@/lib/pomodoro-utils';
import { TimerMode } from '@/types/pomodoro';

interface TimerDisplayProps {
  timeLeft: number;
  mode: TimerMode;
  progress: number;
}

export default function TimerDisplay({ timeLeft, mode, progress }: TimerDisplayProps) {
  const modeConfig = {
    work: { label: 'Focus Time', color: 'text-red-500', stroke: 'stroke-red-500' },
    shortBreak: { label: 'Short Break', color: 'text-green-500', stroke: 'stroke-green-500' },
    longBreak: { label: 'Long Break', color: 'text-blue-500', stroke: 'stroke-blue-500' },
  };

  const config = modeConfig[mode];
  const circumference = 2 * Math.PI * 140;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className={`text-2xl font-semibold ${config.color}`}>{config.label}</h2>
      
      <div className="relative w-80 h-80">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 320 320">
          {/* Background circle */}
          <circle
            cx="160"
            cy="160"
            r="140"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            className="text-muted"
          />
          {/* Progress circle */}
          <circle
            cx="160"
            cy="160"
            r="140"
            fill="none"
            strokeWidth="12"
            strokeLinecap="round"
            className={config.stroke}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset,
              transition: 'stroke-dashoffset 1s linear',
            }}
          />
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl font-bold tabular-nums">{formatTime(timeLeft)}</span>
        </div>
      </div>
    </div>
  );
}
