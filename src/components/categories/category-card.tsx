import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  testCount?: number;
}

export function CategoryCard({ title, description, imageUrl, href, testCount }: CategoryCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="aspect-video w-full rounded-lg object-cover"
          />
          {testCount && (
            <span className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm">
              {testCount} آزمون
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full group-hover:bg-primary/90">
          <a href={href}>مشاهده آزمون‌ها</a>
        </Button>
      </CardFooter>
    </Card>
  );
}