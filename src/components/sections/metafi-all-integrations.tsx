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
      'Fast, reliable make-ready services to minimize vacancy and get units back on market quickly.',
    items: [
      'Paint, flooring, repairs',
      '3–7 day turnaround',
      'Fixed pricing options',
    ],
    icon: '/images/homepage/integrations/shopify.svg',
  },
  {
    name: 'Value-Add Renovations',
    description:
      'Targeted upgrades designed to improve rent performance and property value.',
    items: [
      'Kitchen and bath upgrades',
      'Flooring and lighting packages',
      'ROI-driven recommendations',
    ],
    note: 'We focus on practical improvements that align with your property and market.',
    icon: '/images/homepage/integrations/stripe.svg',
  },
  {
    name: 'Ongoing Maintenance',
    description:
      'Simple, reliable maintenance to keep your property performing.',
    items: [
      'On-demand repairs',
      'Preventative maintenance',
      'Optional monthly service plans',
    ],
    icon: '/images/homepage/integrations/zapier.svg',
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
          Everything Your Property Needs
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-18 lg:grid-cols-3">
          {SERVICES.map((svc) => (
            <li key={svc.name} className="h-full">
              <article className="bg-card border-border-light shadow-light h-full rounded-[16px] border p-4">
                <div className="bg-accent flex h-[200px] w-full items-center justify-center rounded-[12px]">
                  <Image
                    src={svc.icon}
                    alt=""
                    width={80}
                    height={80}
                    className="h-20 w-20 object-contain"
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
      </div>
    </section>
  );
}
