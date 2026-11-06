'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { CityNotifyModal } from '@/components/city-notify-modal';
import { Button } from '@/components/ui/button';
import { LIVE_CITIES, listCities } from '@/lib/live-cities';

// Homepage first screen. Merges the template hero (text over a gradient, no
// action) and the dark "Now available" panel, so the primary action and the
// product's own picture — current rent vs the target nearby rentals support —
// are both visible without scrolling.

// Illustrative sample, the same figures as the preview card on /tool
// (getrentready app/tool/page.tsx). Labelled "Example" on screen.
const EXAMPLE_PROPERTIES = [
  { address: '1420 Telegraph Ave', units: 2, current: 4900, target: 5310 },
  { address: '388 Grand Ave', units: 5, current: 10450, target: 13886 },
  { address: '2711 MacArthur Blvd', units: 15, current: 26100, target: 37475 },
];

const usd = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);

function ExampleRentCard() {
  const totalUpside = EXAMPLE_PROPERTIES.reduce(
    (sum, p) => sum + (p.target - p.current),
    0,
  );
  return (
    <figure
      aria-label="Example: current rents compared with target rents for three sample Oakland properties"
      className="flex w-full flex-col gap-6 rounded-2xl bg-[#F6F3EE] p-6 text-left text-[#32322C] sm:p-7"
    >
      <figcaption className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-bold">Example · Oakland, CA</span>
        <span className="text-[13px] text-[#5f5e57]">Sample figures</span>
      </figcaption>
      <ul className="flex flex-col gap-5">
        {EXAMPLE_PROPERTIES.map((p) => {
          const axisMax = p.target * 1.12;
          return (
            <li key={p.address} className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[15px] font-bold">
                  {p.address}{' '}
                  <span className="font-medium text-[#5f5e57]">
                    {p.units} units
                  </span>
                </span>
                <span className="text-base font-extrabold whitespace-nowrap text-[#3550D9] tabular-nums">
                  +{usd(p.target - p.current)}
                </span>
              </div>
              <div
                aria-hidden="true"
                className="relative h-4 rounded-full bg-[#E5DFD4]"
              >
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-[#4D6CFA]"
                  style={{ width: `${(p.current / axisMax) * 100}%` }}
                />
                <div
                  className="absolute -inset-y-1 w-1 rounded-sm bg-[#1A1A1A]"
                  style={{ left: `${(p.target / axisMax) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[13px] font-medium text-[#5f5e57] tabular-nums">
                <span>Current {usd(p.current)}</span>
                <span>Target {usd(p.target)}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex items-end justify-between gap-4 border-t border-[#E5DFD4] pt-5">
        <div className="flex flex-wrap gap-4 text-[13px] font-medium text-[#5f5e57]">
          <span className="flex items-center gap-2">
            <span className="h-2 w-3.5 rounded-full bg-[#4D6CFA]" /> Current
            rents
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-1 rounded-sm bg-[#1A1A1A]" /> Target
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs font-semibold text-[#5f5e57]">
            Total upside
          </span>
          <span className="text-2xl font-extrabold tracking-[-0.02em] tabular-nums">
            {usd(totalUpside)}
            <span className="text-sm font-semibold text-[#5f5e57]">/mo</span>
          </span>
        </div>
      </div>
    </figure>
  );
}

const GrrHero = () => {
  const [notifyOpen, setNotifyOpen] = useState(false);
  const liveCityList = listCities(LIVE_CITIES);

  return (
    <section
      id="grr-hero"
      className="w-full bg-[#32322C] px-6 pt-10 pb-16 sm:px-10 sm:pt-14 md:pt-20 md:pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <p className="text-lg font-semibold text-balance text-[#F76F8E] sm:text-xl">
            Now available in {liveCityList}
          </p>
          <h1 className="text-[2.5rem] leading-[1.05] font-extrabold tracking-[-0.03em] text-balance text-white sm:text-5xl md:text-6xl">
            See how your unit compares to higher-rent apartments nearby
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-pretty text-[#c9c9c0]">
            Get Rent Ready compares your unit to similar rentals in{' '}
            {liveCityList}, so you can set the right rent before you list.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto">
            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-full bg-[#3D5CE8] px-7 text-base text-white hover:bg-[#3550D9] sm:w-auto"
            >
              <Link href="/tool">
                Analyze My Property — Free
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <p className="text-sm text-[#c9c9c0]">
              Free to use · No commitment
            </p>
          </div>
          <p className="text-sm text-[#c9c9c0]">
            Outside these cities?{' '}
            <button
              type="button"
              onClick={() => setNotifyOpen(true)}
              aria-haspopup="dialog"
              className="-my-3 inline-flex min-h-11 items-center font-semibold text-white underline underline-offset-4 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Get notified when we launch near you
            </button>
          </p>
        </div>
        <ExampleRentCard />
      </div>
      <CityNotifyModal
        open={notifyOpen}
        onClose={() => setNotifyOpen(false)}
        source="getrealready-homepage"
      />
    </section>
  );
};

export default GrrHero;
