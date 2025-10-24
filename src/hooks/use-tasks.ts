"use client";

import { useState, useEffect } from 'react';
import { Task } from '@/types/pomodoro';

const STORAGE_KEY = 'pomodoroTasks';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setTasks(JSON.parse(saved));
      } catch {
        setTasks([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string, pomodorosTarget: number = 1) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      pomodorosCompleted: 0,
      pomodorosTarget,
      createdAt: Date.now(),
    };
    setTasks(prev => [newTask, ...prev]);
    return newTask;
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, ...updates } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTaskComplete = (id: string) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const incrementTaskPomodoro = (id: string) => {
    setTasks(prev => prev.map(task => {
      if (task.id === id) {
        const newCompleted = task.pomodorosCompleted + 1;
        return {
          ...task,
          pomodorosCompleted: newCompleted,
          completed: newCompleted >= task.pomodorosTarget,
        };
      }
      return task;
    }));
  };

  const clearCompletedTasks = () => {
    setTasks(prev => prev.filter(task => !task.completed));
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskComplete,
    incrementTaskPomodoro,
    clearCompletedTasks,
  };
};
