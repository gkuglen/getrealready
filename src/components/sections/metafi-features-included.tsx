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
    title: '1. Share Your Unit',
    description: "Send an address or listing—we'll take it from there",
    iconSrc: '/images/features/included/analyze.svg',
  },
  {
    title: '2. Compare to the Market',
    description:
      'We analyze your unit against higher-performing apartments nearby to identify rent gaps',
    iconSrc: '/images/features/included/upgrade.svg',
  },
  {
    title: '3. Get Clear Insight',
    description:
      'We walk you through rent potential, what\u2019s driving higher rents, and which upgrades are worth it',
    iconSrc: '/images/features/included/maintain.svg',
  },
  {
    title: '4. Decide What to Do Next',
    description:
      "Move forward with confidence—whether that's making targeted upgrades or holding as-is",
    iconSrc: '/images/features/included/analyze.svg',
  },
];

export default function MetafiFeaturesIncluded({
  overline = 'How It Works',
  title = 'A simple way to understand and improve your unit',
  subtitle = 'If helpful, we can also support execution of the recommended upgrades.',
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
          <h2 className="text-foreground mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-sm sm:text-base">
            {subtitle}
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-18 md:gap-x-12 md:gap-y-18 lg:grid-cols-3">
          {items.map((it) => (
            <li key={it.title} className="text-center">
              <div
                className="border-border-light bg-card shadow-light mx-auto mb-4 flex h-[88px] w-[88px] items-center justify-center rounded-[12px] border"
                aria-hidden
              >
                <Image
                  src={it.iconSrc}
                  alt={it.iconAlt || ''}
                  width={24}
                  height={24}
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-foreground mt-6 text-lg font-medium">
                {it.title}
              </h3>
              <p className="text-muted-foreground mx-auto mt-2 max-w-[44ch] text-base">
                {it.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
