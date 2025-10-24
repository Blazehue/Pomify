"use client";

import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { TimerMode } from '@/types/pomodoro';

interface TimerControlsProps {
  isRunning: boolean;
  mode: TimerMode;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onSwitchMode: (mode: TimerMode) => void;
}

export default function TimerControls({
  isRunning,
  mode,
  onStart,
  onPause,
  onReset,
  onSwitchMode,
}: TimerControlsProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Mode Switcher */}
      <div className="flex gap-2 bg-muted p-1 rounded-lg">
        <Button
          variant={mode === 'work' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onSwitchMode('work')}
          className="min-w-24"
        >
          Work
        </Button>
        <Button
          variant={mode === 'shortBreak' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onSwitchMode('shortBreak')}
          className="min-w-24"
        >
          Short Break
        </Button>
        <Button
          variant={mode === 'longBreak' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onSwitchMode('longBreak')}
          className="min-w-24"
        >
          Long Break
        </Button>
      </div>

      {/* Play/Pause/Reset Controls */}
      <div className="flex gap-3">
        {isRunning ? (
          <Button
            size="lg"
            onClick={onPause}
            className="min-w-32 gap-2"
          >
            <Pause className="w-5 h-5" />
            Pause
          </Button>
        ) : (
          <Button
            size="lg"
            onClick={onStart}
            className="min-w-32 gap-2"
          >
            <Play className="w-5 h-5" />
            Start
          </Button>
        )}
        <Button
          size="lg"
          variant="outline"
          onClick={onReset}
        >
          <RotateCcw className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
