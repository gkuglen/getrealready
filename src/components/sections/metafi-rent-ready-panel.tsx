import {
  ArrowUpRight,
  BarChart3,
  Check,
  CircleDot,
  ScanSearch,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const message = {
  eyebrow: 'Now available',
  title: 'Get Rent Ready is live in Oakland',
  lead: 'See how your rental property compares.',
  description:
    'Get Rent Ready compares your units to similar Oakland rentals to show where your rents stand and where there may be opportunities to improve.',
  cta: 'Analyze My Property — Free',
};

const MetafiRentReadyPanel = () => {
  return (
    <section id="grr-rent-ready" className="bg-muted w-full py-16 lg:py-24">
      <div className="flex flex-col gap-10">
        <div className="max-w-xl px-6 md:px-12 lg:px-20">
          <p className="text-muted-foreground text-xs font-medium tracking-[0.18em] uppercase">
            Three launch directions
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Choose the announcement that fits your homepage.
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          <article className="group text-primary-foreground flex min-h-[460px] w-full flex-col justify-between overflow-hidden bg-[var(--grr-blue)] px-7 py-9 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:px-12 sm:py-12 lg:px-20">
            <div className="flex items-start justify-between">
              <span className="bg-primary-foreground/15 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium uppercase">
                <CircleDot className="size-3.5" /> {message.eyebrow}
              </span>
              <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <div>
              <p className="text-primary-foreground/70 mb-5 text-sm font-medium">
                01 / Bold launch
              </p>
              <h3 className="max-w-sm text-3xl leading-[1.05] font-medium tracking-tight text-balance sm:text-4xl">
                {message.title}
              </h3>
              <p className="mt-5 text-lg font-medium">{message.lead}</p>
              <p className="text-primary-foreground/75 mt-3 text-sm leading-6">
                {message.description}
              </p>
              <Button
                asChild
                className="text-primary-foreground mt-7 w-full bg-[var(--grr-charcoal)] hover:bg-[var(--grr-charcoal)]/90 sm:w-auto"
              >
                <Link href="/tool">
                  {message.cta}
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </article>

          <article className="flex min-h-[460px] w-full flex-col justify-between overflow-hidden border border-[var(--grr-charcoal)]/15 bg-[var(--grr-green)] px-7 py-9 text-[var(--grr-charcoal)] shadow-sm sm:px-12 sm:py-12 lg:px-20">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase">
                <span className="size-2 rounded-full bg-[var(--grr-pink)]" />{' '}
                {message.eyebrow}
              </span>
              <BarChart3 className="size-5" />
            </div>
            <div>
              <p className="mb-5 text-sm font-medium opacity-60">
                02 / Market clarity
              </p>
              <h3 className="max-w-sm text-3xl leading-[1.05] font-medium tracking-tight text-balance sm:text-4xl">
                Know where your rent stands.
              </h3>
              <p className="mt-5 text-lg font-medium">{message.lead}</p>
              <p className="mt-3 text-sm leading-6 opacity-75">
                {message.description}
              </p>
              <Button
                asChild
                className="text-primary-foreground mt-7 w-full bg-[var(--grr-charcoal)] hover:bg-[var(--grr-charcoal)]/90 sm:w-auto"
              >
                <Link href="/tool">
                  {message.cta}
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </article>

          <article className="text-primary-foreground flex min-h-[460px] w-full flex-col justify-between overflow-hidden bg-[var(--grr-charcoal)] px-7 py-9 shadow-sm sm:px-12 sm:py-12 lg:px-20">
            <div className="border-primary-foreground/20 flex items-center justify-between border-b pb-5">
              <span className="text-xs font-medium tracking-[0.18em] uppercase">
                Oakland / 2026
              </span>
              <ScanSearch className="size-5 text-[var(--grr-pink)]" />
            </div>
            <div>
              <p className="text-primary-foreground/55 mb-5 text-sm font-medium">
                03 / Editorial
              </p>
              <h3 className="max-w-sm text-3xl leading-[1.05] font-medium tracking-tight text-balance sm:text-4xl">
                {message.title}
              </h3>
              <p className="mt-5 text-lg font-medium text-[var(--grr-taupe)]">
                {message.lead}
              </p>
              <p className="text-primary-foreground/65 mt-3 text-sm leading-6">
                {message.description}
              </p>
              <Button
                asChild
                className="mt-7 w-full bg-[var(--grr-pink)] text-[var(--grr-charcoal)] hover:bg-[var(--grr-pink)]/90 sm:w-auto"
              >
                <Link href="/tool">
                  {message.cta}
                  <Check data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MetafiRentReadyPanel;
