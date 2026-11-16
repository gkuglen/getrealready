'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

type MetafiAboutHeroProps = {
  overline?: string;
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  showCta?: boolean;
  showImage?: boolean;
};

export default function MetafiAboutHero({
  overline,
  title = 'Get to Know Metafi',
  subtitle = 'Gateway to discovering the essence of our company and the comprehensive suite of financial solutions we offer.',
  ctaHref = '/careers',
  ctaLabel = 'See Open Positions',
  imageSrc = '/images/about/hero.webp',
  imageAlt = 'Metafi team working together',
  showCta = true,
  showImage = true,
}: MetafiAboutHeroProps) {
  return (
    <section id="metafi-about-hero" className="bg-background px-6 lg:px-0">
      <div className="container px-0 md:px-6">
        <div className="relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-8 sm:py-18 md:py-20">
            {/* Optional, and plain: the script-font eyebrow was dropped site-wide. */}
            {overline && (
              <p className="text-muted-foreground mb-4 text-base font-medium">
                {overline}
              </p>
            )}

            {/* Same size and weight as the homepage title (Inter 800, 60px desktop). */}
            <h1 className="text-foreground text-[2.5rem] leading-[1.05] font-extrabold tracking-[-0.03em] text-balance sm:text-5xl md:text-6xl">
              {title}
            </h1>

            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
              {subtitle}
            </p>

            {showCta && (
              <div className="mt-8">
                <Button asChild className="w-full sm:w-auto">
                  <Link href={ctaHref}>{ctaLabel}</Link>
                </Button>
              </div>
            )}
          </div>

          {showImage && (
            <div className="px-6 sm:px-8">
              <div className="border-border-light shadow-light bg-card mx-auto max-w-5xl overflow-hidden rounded-t-sm border md:rounded-t-[12px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={2400}
                  height={1400}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  priority={false}
                />
              </div>
            </div>
          )}
        </div>

        <div className="h-6 sm:h-8" />
      </div>
    </section>
  );
}
