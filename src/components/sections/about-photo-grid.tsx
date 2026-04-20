'use client';

import Image from 'next/image';

const PHOTOS = [
  '/images/about/gray/IMG_1924.webp',
  '/images/about/gray/IMG_0404.webp',
  '/images/about/gray/IMG_3318.webp',
  '/images/about/gray/IMG_2014.webp',
  '/images/about/gray/IMG_1929.webp',
  '/images/about/gray/IMG_2944-r.webp',
  '/images/about/gray/IMG_1922.webp',
  '/images/about/gray/IMG_1927.webp',
  '/images/about/gray/IMG_0715.webp',
  '/images/about/gray/IMG_2944.webp',
];

export default function AboutPhotoGrid() {
  return (
    <section className="bg-accent px-6 py-16 sm:py-20 lg:px-0">
      <div className="container px-0 md:px-6">
        <div className="border-border-light shadow-light bg-card mx-auto w-fit overflow-hidden rounded-[12px] border">
          <div className="grid grid-cols-5">
            {PHOTOS.map((src, i) => (
              <div key={i} className="relative h-[150px] w-[150px]">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <h2 className="text-foreground text-xl font-medium tracking-tight">
            About the Founder
          </h2>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Get Real Ready is led by Gray Kuglen, a product designer and real
            estate investor based in the Bay Area.
          </p>
        </div>
      </div>
    </section>
  );
}
