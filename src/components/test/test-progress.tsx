import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

interface TestProgressProps {
  current: number;
  total: number;
  totalTime: number;
}

export function TestProgress({ current, total, totalTime }: TestProgressProps) {
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const progress = (current / total) * 100;
  const timeProgress = (timeLeft / totalTime) * 100;

  useEffect(() => {
      let intervalId: any;
      if (timeLeft > 0) {
          intervalId = setInterval(() => {
              setTimeLeft(prevTime => prevTime - 1);
          }, 1000);
      }
      return () => clearInterval(intervalId);
  }, [timeLeft]);


  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="sticky top-[3.5rem] z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b rounded-md shadow-sm">
      <div className="container py-4">
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="text-primary font-medium">
            سوال {current} از {total}
          </span>
          <span className="text-secondary-foreground font-medium">
            زمان باقی‌مانده: {formatTime(timeLeft)}
          </span>
        </div>
        <div className="grid gap-2">
          <Progress value={progress} className="h-2 bg-primary ring-1 ring-primary/20" />
          <Progress value={timeProgress} className="h-1" />
        </div>
      </div>
    </div>
  );
}
