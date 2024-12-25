import React from 'react';
import { Progress } from '@/components/ui/progress';

interface TestProgressProps {
  current: number;
  total: number;
  timeLeft: number;
  totalTime: number;
}

export function TestProgress({ current, total, timeLeft, totalTime }: TestProgressProps) {
  const progress = (current / total) * 100;
  const timeProgress = (timeLeft / totalTime) * 100;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="sticky top-[3.5rem] z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container py-4">
        <div className="flex justify-between items-center mb-2 text-sm">
          <span>سوال {current} از {total}</span>
          <span className="text-muted-foreground">زمان باقی‌مانده: {formatTime(timeLeft)}</span>
        </div>
        <div className="grid gap-2">
          <Progress value={progress} className="h-2" />
          <Progress value={timeProgress} className="h-1" />
        </div>
      </div>
    </div>
  );
}