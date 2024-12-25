import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft, Save } from 'lucide-react';

interface TestNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  onFinish: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export function TestNavigation({ onPrevious, onNext, onFinish, hasPrevious, hasNext }: TestNavigationProps) {
  return (
    <div className="sticky bottom-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={!hasPrevious}
          >
            <ChevronRight className="ml-2 h-4 w-4" />
            سوال قبلی
          </Button>
          <Button
            variant="default"
            onClick={hasNext ? onNext : onFinish}
          >
            {hasNext ? (
              <>
                سوال بعدی
                <ChevronLeft className="mr-2 h-4 w-4" />
              </>
            ) : (
              <>
                پایان آزمون
                <Save className="mr-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}