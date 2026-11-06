'use client';

import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';

// The self-serve tool's flow, in its order. Replaced three template sections
// on the homepage ("What We Do", "Start With Clarity", "How It Works") that
// each restated "compare your unit to the market".
const EXAMPLE_ID = 'grr-rent-roll-example';

const STEPS: { title: string; description: React.ReactNode }[] = [
  {
    title: 'Upload in one go',
    description: null, // rendered in GrrHowItWorks: needs the example toggle
  },
  {
    title: 'See how you compare',
    description:
      'Each unit is graded against similar rentals nearby, with the rent range they support.',
  },
  {
    title: 'Set your rent',
    description:
      'List at the number the market supports, or see which features are holding your rent back.',
  },
];


// Privacy wording mirrors getrentready lib/rent-data-consent.ts (the upload's
// consent step); update both together.
// Sample rent roll for the "what we read" example. The used columns are the
// universal rent-roll fields the extractor saves (getrentready
// lib/rent-roll-extraction-schema.ts: unit, bed/bath, sqft, rent, lease
// dates, vacant). The skipped columns are common rent-roll fields it never saves;
// their cells are blanked, so no tenant details appear even as samples.
const USED_COLUMNS = ['Unit', 'Type', 'Sq ft', 'Rent', 'Lease from', 'Lease to', 'Status'];
const SKIPPED_COLUMNS = ['Tenant', 'Contact', 'Deposit', 'Balance'];
const SAMPLE_ROWS = [
  ['101', '1BR/1BA', '650', '$2,150', '03/01/2026', '02/28/2027', 'Occupied'],
  ['102', '2BR/1BA', '900', '$2,695', '08/15/2024', 'Month-to-month', 'Occupied'],
  ['201', '2BR/1BA', '875', '—', '—', '—', 'Vacant'],
  ['202', '1BR/1BA', '610', '$1,980', '06/01/2025', '05/31/2026', 'Notice given'],
];

function RentRollExample({ panelRef }: { panelRef: React.Ref<HTMLDivElement> }) {
  return (
    <div
      id={EXAMPLE_ID}
      ref={panelRef}
      tabIndex={-1}
      className="mx-auto mt-12 max-w-5xl scroll-mt-24 focus:outline-none md:mt-16"
    >
      <div className="max-w-2xl">
        <h3 className="text-foreground text-2xl font-bold tracking-[-0.01em] sm:text-3xl">
          What Get Rent Ready reads from a rent roll
        </h3>
        <p className="text-muted-foreground mt-3 text-base text-pretty sm:text-lg">
          Only the fields that set rent. We don’t keep your rent roll file,
          and only the units you review and confirm are saved to your account.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#4a4a44]">
        <span className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#3D5CE8]" aria-hidden="true" />
          Used for your analysis
        </span>
        <span className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#C9C3B8]" aria-hidden="true" />
          Not saved
        </span>
      </div>

      <div
        className="relative mt-4 overflow-x-auto rounded-2xl border border-[#E5DFD4] bg-white focus-visible:ring-2 focus-visible:ring-[#3D5CE8] focus-visible:outline-none"
        role="region"
        aria-label="Sample rent roll"
        tabIndex={0}
      >
        <table className="w-full min-w-[820px] text-left text-sm tabular-nums">
          <caption className="sr-only">
            Sample rent roll. Unit, type, square feet, rent, lease dates and status are used;
            tenant, contact, deposit and balance columns are not saved.
          </caption>
          <thead>
            <tr className="border-b border-[#E5DFD4]">
              {USED_COLUMNS.map((col) => (
                <th key={col} scope="col" className="px-3 py-3 first:pl-4 last:pr-4 font-semibold text-[#32322C]">
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <span className="size-2 rounded-full bg-[#3D5CE8]" aria-hidden="true" />
                    {col}
                  </span>
                </th>
              ))}
              {SKIPPED_COLUMNS.map((col, i) => (
                <th
                  key={col}
                  scope="col"
                  className={`bg-[#F6F3EE] px-3 py-3 first:pl-4 last:pr-4 font-medium whitespace-nowrap text-[#6b6a62] ${i === 0 ? 'border-l border-[#E5DFD4]' : ''}`}
                >
                  {col}
                  <span className="block text-xs font-normal">Not saved</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SAMPLE_ROWS.map((row) => (
              <tr key={row[0]} className="border-b border-[#EFEDE9] last:border-0">
                {row.map((cell, i) => (
                  <td
                    key={USED_COLUMNS[i]}
                    className={`px-3 py-3 first:pl-4 last:pr-4 whitespace-nowrap ${i === 0 ? 'font-semibold text-[#32322C]' : 'text-[#32322C]'}`}
                  >
                    {cell}
                  </td>
                ))}
                {SKIPPED_COLUMNS.map((col, i) => (
                  <td
                    key={col}
                    className={`bg-[#F6F3EE] px-3 py-3 first:pl-4 last:pr-4 ${i === 0 ? 'border-l border-[#E5DFD4]' : ''}`}
                  >
                    <span className="block h-2.5 w-12 rounded-full bg-[#E5DFD4]" aria-hidden="true" />
                    <span className="sr-only">Not saved</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-[#5f5e57]">
        Sample rent roll; columns can be in any order.
        <span className="sm:hidden"> Scroll sideways to see every column.</span>
      </p>
      <p className="mt-3 max-w-2xl text-sm text-[#4a4a44]">
        With your permission, rents are added to an anonymous, combined pool
        with other landlords’ data, never shown on their own and never with
        your address or unit names.
      </p>
      <a
        href="/samples/sample-rent-roll.csv"
        download
        className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#3550D9] underline underline-offset-4 hover:text-[#2a43bd]"
      >
        <Download className="size-4" aria-hidden="true" />
        Download a sample rent roll (CSV)
      </a>
    </div>
  );
}

const GrrHowItWorks = () => {
  const [exampleOpen, setExampleOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggleExample = () => {
    const opening = !exampleOpen;
    setExampleOpen(opening);
    if (opening) {
      // The example renders below all three steps; on phones that is well off
      // screen, so bring it into view and move focus there.
      requestAnimationFrame(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        panelRef.current?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        panelRef.current?.focus({ preventScroll: true });
      });
    }
  };

  const stepOne = (
    <>
      Share your address or upload your{' '}
      <button
        type="button"
        onClick={toggleExample}
        aria-expanded={exampleOpen}
        aria-controls={EXAMPLE_ID}
        className="font-medium text-[#3550D9] underline underline-offset-4 hover:text-[#2a43bd] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#3D5CE8] focus-visible:outline-none"
      >
        rent roll
      </button>{' '}
      (PDF, Excel, Word or CSV). Get Rent Ready reads every unit, rent and
      lease date for you.
    </>
  );

  return (
    <section
      id="grr-how-it-works"
      className="scroll-mt-20 bg-[#F6F3EE] px-6 lg:px-0"
    >
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-28">
        <h2 className="text-foreground mx-auto max-w-3xl text-center text-3xl leading-[1.1] font-bold tracking-[-0.02em] text-balance sm:text-4xl md:text-5xl">
          See where your rent stands in a few minutes
        </h2>
        <ol className="mx-auto mt-12 grid max-w-5xl gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="border-t border-[#32322C]/15 pt-6">
              <span className="text-sm text-[#3550D9] font-semibold tabular-nums">
                Step {i + 1}
              </span>
              <h3 className="text-foreground mt-2 text-xl font-medium sm:text-2xl">
                {step.title}
              </h3>
              <p className="text-muted-foreground mt-2 max-w-[40ch] text-base text-pretty">
                {i === 0 ? stepOne : step.description}
              </p>
            </li>
          ))}
        </ol>
        {exampleOpen && <RentRollExample panelRef={panelRef} />}
        <div className="mt-12 flex justify-center md:mt-16">
          <Button
            asChild
            className="w-full rounded-full bg-[#3D5CE8] text-white hover:bg-[#3550D9] sm:w-auto"
          >
            <Link href="/tool">
              Analyze My Property — Free
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GrrHowItWorks;
