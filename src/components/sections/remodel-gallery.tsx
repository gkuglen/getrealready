'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

interface RemodelImage {
  id: string;
  src: string;
  alt: string;
  type: 'before' | 'after' | 'during';
}

interface RemodelGalleryProps {
  images: RemodelImage[];
  className?: string;
  aspect?: 'landscape' | 'portrait';
}

export function RemodelGallery({
  images,
  className,
  aspect = 'landscape',
}: RemodelGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const currentImage = images[currentIndex];

  return (
    <div className={cn('relative w-full', className)}>
      <div
        className={cn(
          'bg-muted relative w-full overflow-hidden rounded-2xl',
          aspect === 'portrait'
            ? 'mx-auto aspect-[3/4] max-w-sm'
            : 'aspect-[4/3]',
        )}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="h-full w-full object-cover transition-opacity duration-300"
        />

        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          <span className="text-foreground inline-flex items-center rounded-full bg-white/50 px-6 py-2.5 text-sm font-medium backdrop-blur-sm">
            {currentImage.type === 'before'
              ? 'Before'
              : currentImage.type === 'during'
                ? 'During'
                : 'After'}
          </span>
        </div>

        <button
          onClick={goToPrevious}
          className="bg-background/80 hover:bg-background absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2 backdrop-blur-sm transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="text-foreground h-5 w-5" />
        </button>

        <button
          onClick={goToNext}
          className="bg-background/80 hover:bg-background absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2 backdrop-blur-sm transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="text-foreground h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-2 rounded-full transition-all',
              index === currentIndex
                ? 'bg-foreground w-6'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2',
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
