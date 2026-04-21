'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

const PHOTOS = [
  '/images/about/gray/IMG_0721.webp',
  '/images/about/gray/IMG_1244.webp',
  '/images/about/gray/IMG_1924.webp',
  '/images/about/gray/IMG_1929.webp',
];

export default function AboutPhotoGrid() {
  return (
    <section className="bg-accent px-6 py-16 sm:py-20 lg:px-0">
      <div className="container px-0 md:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">

          {/* 2x2 photo grid */}
          <div className="shrink-0">
            <div className="grid grid-cols-2 gap-2">
              {PHOTOS.map((src, i) => (
                <div key={i} className="relative h-[180px] w-[180px] overflow-hidden rounded-[12px]">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right-side content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-foreground text-2xl font-medium tracking-tight">
              About the Founder
            </h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Get Real Ready is led by Gray Kuglen, a product designer and real
              estate investor based in the Bay Area.
            </p>
            <blockquote className="border-tagline mt-6 border-l-2 pl-4">
              <p className="text-foreground text-sm leading-relaxed italic">
                &ldquo;I&apos;ve spent 20+ years owning, renovating, and
                operating rental property—making the same decisions you face
                today. That experience, combined with disciplined investment
                analysis and CCIM training, allows me to evaluate each decision
                through cost, rent, and long-term asset value.&rdquo;
              </p>
            </blockquote>
            <Link
              href="https://www.linkedin.com/in/graykuglen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground mt-6 flex items-center gap-2 text-sm transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
