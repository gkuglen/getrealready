'use client';

import Image from 'next/image';

type Service = {
  name: string;
  description: string;
  items: string[];
  note?: string;
  icon: string;
};

const SERVICES: Service[] = [
  {
    name: 'Unit Turns & Refreshes',
    description:
      'Fast, reliable make-ready work to minimize vacancy and get units back on market quickly.',
    items: [
      'Paint, flooring, repairs',
      '3–7 day turnaround',
      'Fixed pricing options',
    ],
    icon: '/images/homepage/integrations/refresh.svg',
  },
  {
    name: 'Targeted Upgrades',
    description:
      'Focused improvements designed to increase rent—not just update appearance.',
    items: [
      'Kitchen and bath upgrades',
      'Flooring and lighting improvements',
      'ROI-driven recommendations',
    ],
    note: 'Only the upgrades that align with your unit and market.',
    icon: '/images/homepage/integrations/valueadd.svg',
  },
  {
    name: 'Ongoing Maintenance',
    description:
      'Optional support to keep your units performing consistently over time.',
    items: [
      'On-demand repairs',
      'Preventative maintenance',
      'Optional monthly service plans',
    ],
    icon: '/images/homepage/integrations/refresh.svg',
  },
];

export default function MetafiAllIntegrations() {
  return (
    <section id="grr-services" className="bg-background px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-24">
        <p className="text-tagline mb-4 text-center text-sm sm:text-base">
          Services
        </p>
        <h2 className="text-foreground text-center text-[40px] leading-tight font-medium tracking-tight md:text-[52px]">
          Execute the Right Improvements—When It Makes Sense
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-base sm:text-lg">
          Once you understand your unit&apos;s rent potential, we can help
          implement the improvements that actually move performance.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-18 lg:grid-cols-3">
          {SERVICES.map((svc) => (
            <li key={svc.name} className="h-full">
              <article className="bg-card border-border-light shadow-light h-full rounded-[16px] border p-4">
                <div className="bg-accent flex h-[200px] w-full items-center justify-center rounded-[12px]">
                  <Image
                    src={svc.icon}
                    alt=""
                    width={100}
                    height={100}
                    className="h-125 w-125 object-contain"
                  />
                </div>
                <h3 className="text-foreground mt-4 text-2xl font-medium">
                  {svc.name}
                </h3>
                <p className="text-muted-foreground mt-2 text-[18px]">
                  {svc.description}
                </p>
                <ul className="text-muted-foreground mt-4 space-y-1 text-base">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-tagline font-medium">•</span> {item}
                    </li>
                  ))}
                </ul>
                {svc.note && (
                  <p className="text-muted-foreground mt-4 text-sm italic">
                    {svc.note}
                  </p>
                )}
              </article>
            </li>
          ))}
        </ul>

        {/* Example ROI */}
        <div className="mx-auto mt-16 max-w-xl">
          <p className="text-tagline mb-4 text-center text-sm leading-tight sm:text-base">
            Example ROI
          </p>
          <p className="text-muted-foreground mb-6 text-center text-base sm:text-lg">
            A simple way to think about it:
          </p>
          <ul className="bg-accent divide-border divide-y overflow-hidden rounded-[16px]">
            {[
              { label: 'Upgrade Cost', value: '$12,000' },
              { label: 'Rent Improvement', value: '$300/month' },
              { label: 'Annual Increase', value: '$3,600' },
              { label: 'Estimated Value Created (5% cap)', value: '$72,000' },
            ].map((row) => (
              <li
                key={row.label}
                className="flex items-center justify-between px-6 py-4"
              >
                <span className="text-muted-foreground text-base">
                  {row.label}
                </span>
                <span className="text-foreground text-base font-medium">
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-4 text-center text-sm">
            The goal isn&apos;t just to improve the unit—it&apos;s to improve
            the asset.
          </p>
        </div>
      </div>
    </section>
  );
}
