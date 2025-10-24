"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Plus, 
  Trash2, 
  Edit2, 
  Check, 
  X,
  Target 
} from 'lucide-react';
import { Task } from '@/types/pomodoro';
import { useTasks } from '@/hooks/use-tasks';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface TaskListProps {
  currentTaskId?: string;
  onTaskSelect?: (taskId: string) => void;
}

export default function TaskList({ currentTaskId, onTaskSelect }: TaskListProps) {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskComplete,
    clearCompletedTasks,
  } = useTasks();

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskTarget, setNewTaskTarget] = useState('1');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editTarget, setEditTarget] = useState('');
  const [showClearDialog, setShowClearDialog] = useState(false);

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      const target = parseInt(newTaskTarget) || 1;
      addTask(newTaskTitle.trim(), target);
      setNewTaskTitle('');
      setNewTaskTarget('1');
    }
  };

  const handleStartEdit = (task: Task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
    setEditTarget(task.pomodorosTarget.toString());
  };

  const handleSaveEdit = () => {
    if (editingId && editTitle.trim()) {
      const target = parseInt(editTarget) || 1;
      updateTask(editingId, {
        title: editTitle.trim(),
        pomodorosTarget: target,
      });
      setEditingId(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditTitle('');
    setEditTarget('');
  };

  const activeTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Tasks</h3>
          {completedTasks.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowClearDialog(true)}
              className="text-muted-foreground"
            >
              Clear Completed
            </Button>
          )}
        </div>

        {/* Add New Task */}
        <div className="flex gap-2">
          <Input
            placeholder="Task title..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
            className="flex-1"
          />
          <Input
            type="number"
            min="1"
            max="20"
            value={newTaskTarget}
            onChange={(e) => setNewTaskTarget(e.target.value)}
            className="w-20"
            title="Target pomodoros"
          />
          <Button onClick={handleAddTask} size="icon">
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Active Tasks */}
        <div className="space-y-2">
          {activeTasks.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              No active tasks. Add one to get started!
            </p>
          )}
          {activeTasks.map((task) => (
            <div
              key={task.id}
              className={`p-3 rounded-lg border transition-colors ${
                currentTaskId === task.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:bg-muted/50'
              }`}
              onClick={() => onTaskSelect?.(task.id)}
            >
              {editingId === task.id ? (
                <div className="flex gap-2">
                  <Input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="flex-1"
                    autoFocus
                  />
                  <Input
                    type="number"
                    min="1"
                    value={editTarget}
                    onChange={(e) => setEditTarget(e.target.value)}
                    className="w-20"
                  />
                  <Button size="icon" variant="ghost" onClick={handleSaveEdit}>
                    <Check className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={handleCancelEdit}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTaskComplete(task.id)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{task.title}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Target className="w-3 h-3" />
                      <span>
                        {task.pomodorosCompleted} / {task.pomodorosTarget}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStartEdit(task);
                      }}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteTask(task.id);
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Completed Tasks */}
        {completedTasks.length > 0 && (
          <div className="space-y-2 pt-4 border-t">
            <h4 className="text-sm font-medium text-muted-foreground">
              Completed ({completedTasks.length})
            </h4>
            {completedTasks.map((task) => (
              <div
                key={task.id}
                className="p-3 rounded-lg border border-border bg-muted/30"
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTaskComplete(task.id)}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium line-through text-muted-foreground truncate">
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Target className="w-3 h-3" />
                      <span>
                        {task.pomodorosCompleted} / {task.pomodorosTarget}
                      </span>
                    </div>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => deleteTask(task.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AlertDialog open={showClearDialog} onOpenChange={setShowClearDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Clear completed tasks?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete all completed tasks. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                clearCompletedTasks();
                setShowClearDialog(false);
              }}
            >
              Clear
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
