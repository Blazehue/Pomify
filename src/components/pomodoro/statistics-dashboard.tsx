"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useStatistics } from '@/hooks/use-statistics';
import { 
  BarChart3, 
  Clock, 
  Target, 
  TrendingUp,
  Calendar
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function StatisticsDashboard() {
  const { getStatistics, getDailyStats } = useStatistics();
  const stats = getStatistics();
  const [view, setView] = useState<'week' | 'month'>('week');
  
  const dailyStats = getDailyStats(view === 'week' ? 7 : 30);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const maxCount = Math.max(...dailyStats.map(d => d.count), 1);

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Statistics
          </h3>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-xs font-medium">TODAY</span>
            </div>
            <p className="text-2xl font-bold">{stats.todayPomodoros}</p>
            <p className="text-xs text-muted-foreground">pomodoros</p>
          </div>

          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs font-medium">THIS WEEK</span>
            </div>
            <p className="text-2xl font-bold">{stats.weekPomodoros}</p>
            <p className="text-xs text-muted-foreground">pomodoros</p>
          </div>

          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Target className="w-4 h-4" />
              <span className="text-xs font-medium">THIS MONTH</span>
            </div>
            <p className="text-2xl font-bold">{stats.monthPomodoros}</p>
            <p className="text-xs text-muted-foreground">pomodoros</p>
          </div>

          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-medium">TOTAL TIME</span>
            </div>
            <p className="text-2xl font-bold">
              {Math.round(stats.totalFocusTime / 60)}h
            </p>
            <p className="text-xs text-muted-foreground">focused</p>
          </div>
        </div>

        {/* Chart View Toggle */}
        <Tabs value={view} onValueChange={(v) => setView(v as 'week' | 'month')}>
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="week">Last 7 Days</TabsTrigger>
            <TabsTrigger value="month">Last 30 Days</TabsTrigger>
          </TabsList>

          <TabsContent value={view} className="space-y-4 mt-6">
            {/* Bar Chart */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Daily Pomodoros</h4>
              <div className="flex items-end justify-between gap-2 h-48">
                {dailyStats.map((day) => (
                  <div
                    key={day.date}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <div className="w-full flex flex-col justify-end flex-1">
                      <div
                        className="w-full bg-primary rounded-t transition-all hover:opacity-80"
                        style={{
                          height: `${(day.count / maxCount) * 100}%`,
                          minHeight: day.count > 0 ? '8px' : '0px',
                        }}
                        title={`${day.count} pomodoros`}
                      />
                    </div>
                    <div className="text-[10px] text-muted-foreground text-center">
                      {formatDate(day.date)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus Time Chart */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Daily Focus Time (minutes)</h4>
              <div className="space-y-1">
                {dailyStats.filter(d => d.minutes > 0).map((day) => (
                  <div key={day.date} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        {formatDate(day.date)}
                      </span>
                      <span className="font-medium">{day.minutes} min</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all"
                        style={{
                          width: `${(day.minutes / (view === 'week' ? 180 : 300)) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
                {dailyStats.filter(d => d.minutes > 0).length === 0 && (
                  <p className="text-center text-muted-foreground py-8 text-sm">
                    No completed pomodoros yet
                  </p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Recent Sessions */}
        {stats.sessions.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Recent Sessions</h4>
            <div className="space-y-1 max-h-48 overflow-y-auto">
              {stats.sessions.slice(0, 10).map((session) => (
                <div
                  key={session.id}
                  className="flex items-center justify-between text-xs p-2 rounded bg-muted"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      session.mode === 'work' 
                        ? 'bg-red-500' 
                        : session.mode === 'shortBreak'
                        ? 'bg-green-500'
                        : 'bg-blue-500'
                    }`} />
                    <span className="capitalize">{session.mode.replace(/([A-Z])/g, ' $1')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span>{session.duration} min</span>
                    <span>•</span>
                    <span>
                      {new Date(session.completedAt).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
