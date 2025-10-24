"use client";

import { useState, useEffect } from 'react';
import PomodoroTimer from './pomodoro-timer';
import TaskList from './task-list';
import StatisticsDashboard from './statistics-dashboard';
import SettingsPanel from './settings-panel';
import { useStatistics } from '@/hooks/use-statistics';
import { useTasks } from '@/hooks/use-tasks';
import { PomodoroSession } from '@/types/pomodoro';
import { requestNotificationPermission } from '@/lib/pomodoro-utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function PomodoroApp() {
  const [currentTaskId, setCurrentTaskId] = useState<string | undefined>();
  const { addSession } = useStatistics();
  const { incrementTaskPomodoro } = useTasks();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Request notification permission on mount
    requestNotificationPermission();
  }, []);

  const handleSessionComplete = (session: PomodoroSession) => {
    addSession(session);
    
    // Increment task pomodoro count if a task is selected
    if (currentTaskId && session.mode === 'work') {
      incrementTaskPomodoro(currentTaskId);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Pomify
            </h1>
            <p className="text-muted-foreground mt-1">
              Stay focused and productive with the Pomodoro Technique
            </p>
          </div>
          <SettingsPanel />
        </header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Timer */}
          <div className="lg:col-span-2">
            <PomodoroTimer
              currentTaskId={currentTaskId}
              onSessionComplete={handleSessionComplete}
            />
          </div>

          {/* Right Column - Tasks */}
          <div>
            <TaskList
              currentTaskId={currentTaskId}
              onTaskSelect={setCurrentTaskId}
            />
          </div>
        </div>

        {/* Statistics */}
        <div>
          <StatisticsDashboard />
        </div>

        {/* Mobile-friendly tabs view */}
        <div className="lg:hidden">
          <Tabs defaultValue="timer" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="timer">Timer</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
            </TabsList>
            <TabsContent value="timer" className="mt-6">
              <PomodoroTimer
                currentTaskId={currentTaskId}
                onSessionComplete={handleSessionComplete}
              />
            </TabsContent>
            <TabsContent value="tasks" className="mt-6">
              <TaskList
                currentTaskId={currentTaskId}
                onTaskSelect={setCurrentTaskId}
              />
            </TabsContent>
            <TabsContent value="stats" className="mt-6">
              <StatisticsDashboard />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
