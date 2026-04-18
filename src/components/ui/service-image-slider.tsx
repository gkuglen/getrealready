'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback } from 'react';

type SlideImage = {
  src: string;
  label?: string;
};

interface ServiceImageSliderProps {
  images: SlideImage[];
}

export function ServiceImageSlider({ images }: ServiceImageSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (images.length === 0) return null;

  return (
    <div className="relative h-[200px] w-full overflow-hidden rounded-[12px]">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {images.map((img, i) => (
            <div key={i} className="relative h-full min-w-full flex-shrink-0">
              <Image
                src={img.src}
                alt={img.label || ''}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {img.label && (
                <span className="absolute top-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
                  {img.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white hover:bg-black/60"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white hover:bg-black/60"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}
    </div>
  );
}
