"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { 
  Settings, 
  Bell, 
  Volume2, 
  Moon, 
  Sun,
  Save,
  RotateCcw
} from 'lucide-react';
import { PomodoroSettings } from '@/types/pomodoro';
import { getSettings, saveSettings, DEFAULT_SETTINGS, requestNotificationPermission } from '@/lib/pomodoro-utils';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useTheme } from 'next-themes';

interface SettingsPanelProps {
  onSettingsChange?: (settings: PomodoroSettings) => void;
}

export default function SettingsPanel({ onSettingsChange }: SettingsPanelProps) {
  const [settings, setSettings] = useState<PomodoroSettings>(DEFAULT_SETTINGS);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSettings(getSettings());
  }, []);

  const handleSave = () => {
    saveSettings(settings);
    onSettingsChange?.(settings);
    setOpen(false);
  };

  const handleReset = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  const handleNotificationToggle = async (enabled: boolean) => {
    if (enabled) {
      const granted = await requestNotificationPermission();
      if (granted) {
        setSettings({ ...settings, notificationsEnabled: true });
      }
    } else {
      setSettings({ ...settings, notificationsEnabled: false });
    }
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <Settings className="w-5 h-5" />
      </Button>
    );
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>
            Customize your Pomodoro timer experience
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 py-6">
          {/* Timer Durations */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Timer Durations (minutes)</h3>
            
            <div className="space-y-2">
              <Label htmlFor="work-duration">Work Duration</Label>
              <Input
                id="work-duration"
                type="number"
                min="1"
                max="60"
                value={settings.workDuration}
                onChange={(e) => setSettings({
                  ...settings,
                  workDuration: parseInt(e.target.value) || 25
                })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="short-break">Short Break</Label>
              <Input
                id="short-break"
                type="number"
                min="1"
                max="30"
                value={settings.shortBreakDuration}
                onChange={(e) => setSettings({
                  ...settings,
                  shortBreakDuration: parseInt(e.target.value) || 5
                })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="long-break">Long Break</Label>
              <Input
                id="long-break"
                type="number"
                min="1"
                max="60"
                value={settings.longBreakDuration}
                onChange={(e) => setSettings({
                  ...settings,
                  longBreakDuration: parseInt(e.target.value) || 15
                })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="long-break-interval">Long Break Interval</Label>
              <Input
                id="long-break-interval"
                type="number"
                min="1"
                max="10"
                value={settings.longBreakInterval}
                onChange={(e) => setSettings({
                  ...settings,
                  longBreakInterval: parseInt(e.target.value) || 4
                })}
              />
              <p className="text-xs text-muted-foreground">
                After how many work sessions
              </p>
            </div>
          </div>

          {/* Auto-start */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Auto-start</h3>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-start-breaks" className="flex-1">
                Auto-start Breaks
              </Label>
              <Switch
                id="auto-start-breaks"
                checked={settings.autoStartBreaks}
                onCheckedChange={(checked) => setSettings({
                  ...settings,
                  autoStartBreaks: checked
                })}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="auto-start-work" className="flex-1">
                Auto-start Work Sessions
              </Label>
              <Switch
                id="auto-start-work"
                checked={settings.autoStartWork}
                onCheckedChange={(checked) => setSettings({
                  ...settings,
                  autoStartWork: checked
                })}
              />
            </div>
          </div>

          {/* Notifications */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </h3>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications" className="flex-1">
                Browser Notifications
              </Label>
              <Switch
                id="notifications"
                checked={settings.notificationsEnabled}
                onCheckedChange={handleNotificationToggle}
              />
            </div>
          </div>

          {/* Sound */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm flex items-center gap-2">
              <Volume2 className="w-4 h-4" />
              Sound
            </h3>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="sound" className="flex-1">
                Enable Sound
              </Label>
              <Switch
                id="sound"
                checked={settings.soundEnabled}
                onCheckedChange={(checked) => setSettings({
                  ...settings,
                  soundEnabled: checked
                })}
              />
            </div>

            {settings.soundEnabled && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Volume</Label>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(settings.volume * 100)}%
                  </span>
                </div>
                <Slider
                  value={[settings.volume * 100]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => setSettings({
                    ...settings,
                    volume: value[0] / 100
                  })}
                />
              </div>
            )}
          </div>

          {/* Theme */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Theme</h3>
            
            <div className="flex gap-2">
              <Button
                variant={theme === 'light' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTheme('light')}
                className="flex-1 gap-2"
              >
                <Sun className="w-4 h-4" />
                Light
              </Button>
              <Button
                variant={theme === 'dark' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTheme('dark')}
                className="flex-1 gap-2"
              >
                <Moon className="w-4 h-4" />
                Dark
              </Button>
              <Button
                variant={theme === 'system' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTheme('system')}
                className="flex-1"
              >
                System
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-4 border-t">
            <Button
              variant="outline"
              onClick={handleReset}
              className="flex-1 gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
            <Button
              onClick={handleSave}
              className="flex-1 gap-2"
            >
              <Save className="w-4 h-4" />
              Save
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
