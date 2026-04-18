'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

type Client = {
  title: string;
  description: string;
  href: string;
};

const CLIENTS: Client[] = [
  {
    title: 'Landlords (1–10 Units)',
    description:
      "You're managing your own properties and want a simpler, more reliable way to upgrade and maintain units.",
    href: '/#grr-cta',
  },
  {
    title: 'Property Managers',
    description:
      'You need fast, consistent execution without coordinating multiple vendors.',
    href: '/#grr-cta',
  },
  {
    title: 'Real Estate Investors',
    description:
      "You're focused on improving asset performance and long-term value.",
    href: '/#grr-cta',
  },
];

export default function MetafiJobOpenings() {
  return (
    <section id="grr-who" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="text-tagline font-caveat text-xl font-medium sm:text-2xl">
            Who We Work With
          </p>
          <h2 className="text-foreground mt-4 text-3xl leading-tight font-medium tracking-tight sm:text-5xl md:text-6xl">
            Landlords, Managers &amp; Investors
          </h2>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg">
            We work with property owners at every stage—from single-unit
            landlords to active real estate investors.
          </p>
        </div>

        <ul className="border-border/70 mt-8 divide-y rounded-none border-t sm:mt-10">
          {CLIENTS.map((client) => (
            <li key={client.title} className="border-border">
              <Link
                href={client.href}
                className="group flex items-center justify-between gap-4 py-6 sm:py-7"
                aria-label={client.title}
              >
                <div>
                  <h3 className="text-foreground text-xl font-medium sm:text-2xl">
                    {client.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {client.description}
                  </p>
                </div>
                <ArrowUpRight
                  className="text-logo-gray mt-1 h-5 w-5 flex-shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
          <li aria-hidden className="border-border/70 border-t" />
        </ul>
      </div>
    </section>
  );
}
