'use client';

import Image from 'next/image';

type IncludedItem = {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt?: string;
};

const HOW_IT_WORKS: IncludedItem[] = [
  {
    title: '1. Analyze',
    description: 'We evaluate your unit against local comps to identify missed rent potential.',
    iconSrc: '/images/features/included/payments.svg',
  },
  {
    title: '2. Upgrade',
    description: 'We execute fast, standardized renovations designed to improve rent performance—not just appearance.',
    iconSrc: '/images/features/included/checkout.svg',
  },
  {
    title: '3. Maintain',
    description: 'We keep your units in top condition with ongoing maintenance and support.',
    iconSrc: '/images/features/included/billing.svg',
  },
];

export default function MetafiFeaturesIncluded({
  overline = 'How It Works',
  title = 'Three Steps, End to End',
  subtitle = 'A simple, reliable process designed to improve your property without the complexity.',
  items = HOW_IT_WORKS,
}: {
  overline?: string;
  title?: string;
  subtitle?: string;
  items?: IncludedItem[];
}) {
  return (
    <section id="grr-how-it-works" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:py-24">
        <div className="text-center">
          <p className="text-tagline text-sm sm:text-base">{overline}</p>
          <h2 className="text-foreground mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-5xl">{title}</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-sm sm:text-base">{subtitle}</p>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-18 md:gap-x-12 md:gap-y-18 lg:grid-cols-3">
          {items.map((it) => (
            <li key={it.title} className="text-center">
              <div className="border-border-light bg-card shadow-light mx-auto mb-4 flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border" aria-hidden>
                <Image src={it.iconSrc} alt={it.iconAlt || ''} width={24} height={24} className="h-6 w-6" />
              </div>
              <h3 className="text-foreground mt-6 text-lg font-medium">{it.title}</h3>
              <p className="text-muted-foreground mx-auto mt-2 max-w-[44ch] text-base">{it.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
