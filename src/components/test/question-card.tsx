import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface Option {
  id: string;
  text: string;
}

interface QuestionCardProps {
  number: number;
  text: string;
  options: Option[];
  selectedOption?: string;
  onSelect: (optionId: string) => void;
}

export function QuestionCard({ number, text, options, selectedOption, onSelect }: QuestionCardProps) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center gap-2 text-lg font-medium">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
            {number}
          </span>
          <h3>{text}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedOption} onValueChange={onSelect}>
          {options.map((option) => (
            <div key={option.id} className="flex items-center space-x-2 space-x-reverse mb-3">
              <RadioGroupItem value={option.id} id={option.id} />
              <Label htmlFor={option.id} className="flex-1 cursor-pointer py-2">
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}