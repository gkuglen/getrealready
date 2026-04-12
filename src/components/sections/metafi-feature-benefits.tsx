'use client';

import Image from 'next/image';

type Benefit = {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt?: string;
};

const BENEFITS: Benefit[] = [
  {
    title: 'Before Purchase',
    description: 'Understand potential rent, renovation costs, and upside before you buy.',
    iconSrc: '/images/features/bar.svg',
    iconAlt: 'Bar chart icon',
  },
  {
    title: 'During Ownership',
    description: 'Improve units, reduce vacancy time, and maintain your property without the hassle.',
    iconSrc: '/images/features/bell.svg',
    iconAlt: 'Bell icon',
  },
  {
    title: 'Before Sale',
    description: 'Make targeted upgrades that increase value without over-investing.',
    iconSrc: '/images/features/server.svg',
    iconAlt: 'Controls icon',
  },
];

export default function MetafiFeatureBenefits({
  items = BENEFITS,
}: {
  items?: Benefit[];
}) {
  return (
    <section id="grr-stages" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-12 sm:py-16 md:px-6 md:py-20">
        <p className="text-tagline mb-4 text-center text-sm sm:text-base">
          Support at Any Stage of Ownership
        </p>
        <h2 className="text-foreground mx-auto mb-10 max-w-3xl text-center text-3xl leading-tight font-medium tracking-tight sm:text-4xl md:text-5xl">
          Whether you're acquiring a new property, managing existing units, or preparing for sale—we help you make the right improvements at the right time.
        </h2>
        <ul className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3">
          {items.map(({ title, description, iconSrc, iconAlt }) => (
            <li key={title} className="text-start">
              <div className="border-border-light shadow-soft mb-6 flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border bg-white">
                <Image
                  src={iconSrc}
                  alt={iconAlt || ''}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                  priority={false}
                />
              </div>
              <h3 className="text-foreground text-base font-medium sm:text-lg">{title}</h3>
              <p className="text-muted-foreground mx-auto mt-2 text-sm sm:text-base">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
