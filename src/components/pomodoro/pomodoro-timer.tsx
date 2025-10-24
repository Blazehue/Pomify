"use client";

import { Card } from '@/components/ui/card';
import TimerDisplay from './timer-display';
import TimerControls from './timer-controls';
import { usePomodoroTimer } from '@/hooks/use-pomodoro-timer';
import { PomodoroSession } from '@/types/pomodoro';

interface PomodoroTimerProps {
  currentTaskId?: string;
  onSessionComplete?: (session: PomodoroSession) => void;
}

export default function PomodoroTimer({ currentTaskId, onSessionComplete }: PomodoroTimerProps) {
  const {
    mode,
    timeLeft,
    isRunning,
    completedPomodoros,
    progress,
    start,
    pause,
    reset,
    switchMode,
  } = usePomodoroTimer(onSessionComplete);

  return (
    <Card className="p-8">
      <div className="flex flex-col items-center gap-8">
        <TimerDisplay timeLeft={timeLeft} mode={mode} progress={progress} />
        
        <TimerControls
          isRunning={isRunning}
          mode={mode}
          onStart={start}
          onPause={pause}
          onReset={reset}
          onSwitchMode={switchMode}
        />

        <div className="text-center text-sm text-muted-foreground">
          Completed today: <span className="font-semibold text-foreground">{completedPomodoros}</span> pomodoros
        </div>
      </div>
    </Card>
  );
}
