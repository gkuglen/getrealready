'use client';

import { Check } from 'lucide-react';

import { CalendlyButton } from '@/components/ui/calendly-button';

const HOW_IT_WORKS = [
  'Share basic details about your property',
  'Receive a structured analysis and recommendations',
  'Review potential rent and performance upside',
  'Decide if and how you want to move forward',
];

export default function PricingContent() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-background px-6 lg:px-0">
        <div className="container mx-auto max-w-4xl px-0 py-16 text-center sm:py-20 md:px-6">
          <p className="text-tagline font-caveat text-xl font-medium sm:text-2xl">
            Pricing
          </p>
          <h1 className="text-foreground mt-4 text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl md:text-[68px]">
            Clear insight.
            <br className="hidden sm:block" /> Measurable outcomes.
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-base sm:text-lg">
            Many rental units leave rent on the table—not because of location,
            but because of how they compare to other units in the same market.
          </p>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            Get Real Ready helps you understand where your unit stands, where
            the gaps are, and what changes are most likely to improve
            performance.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-accent px-6 py-16 sm:py-20 lg:px-0">
        <div className="container mx-auto max-w-4xl px-0 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* Card 1 — Property Analysis */}
            <article className="bg-tagline text-primary-foreground shadow-card rounded-[20px] p-7">
              <h2 className="text-xl font-semibold">
                Property Analysis &amp; Rent Optimization
              </h2>
              <p className="text-primary-foreground/80 mt-2 text-sm">
                Starting at $750 – $1,250 per property
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  'Rent and comp analysis based on local market data',
                  'Unit quality grading using a structured scoring model',
                  'Identification of rent gaps vs. higher-performing units',
                  'Targeted upgrade recommendations',
                  'Estimated rent upside and impact on cash flow',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="text-primary-foreground mt-0.5 size-4 shrink-0" strokeWidth={2.5} />
                    <span className="text-primary-foreground/90 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-primary-foreground/20 pt-5">
                <p className="text-primary-foreground/70 text-xs font-medium uppercase tracking-widest">
                  Best for
                </p>
                <p className="text-primary-foreground/85 mt-2 text-sm">
                  Landlords and small portfolios looking to improve rent and
                  asset performance with a clear, data-driven plan.
                </p>
              </div>

              <div className="mt-6">
                <CalendlyButton className="bg-primary-foreground text-tagline hover:bg-primary-foreground/90 w-full">
                  Book a Call
                </CalendlyButton>
              </div>
            </article>

            {/* Card 2 — Upgrade Planning */}
            <article className="bg-card border-border-light shadow-card rounded-[20px] border p-7">
              <h2 className="text-foreground text-xl font-semibold">
                Upgrade Planning
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">Optional</p>
              <p className="text-muted-foreground mt-2 text-sm">
                Custom pricing based on scope
              </p>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                For owners ready to move forward, analysis can be translated
                into a more defined plan.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  'Defined upgrade scope (unit turns, refreshes, targeted improvements)',
                  'Budget ranges and prioritization',
                  'Rent targets tied to improvements',
                  'Vendor recommendations (if needed)',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="text-tagline mt-0.5 size-4 shrink-0" strokeWidth={2.5} />
                    <span className="text-muted-foreground text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CalendlyButton variant="outline" className="w-full">
                  Book a Call
                </CalendlyButton>
              </div>
            </article>
          </div>

          {/* Execution Support */}
          <div className="bg-card border-border-light mt-6 rounded-[20px] border p-7">
            <div className="sm:flex sm:items-start sm:justify-between sm:gap-8">
              <div className="flex-1">
                <h2 className="text-foreground text-xl font-semibold">
                  Execution Support
                </h2>
                <p className="text-muted-foreground mt-1 text-sm">Optional</p>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  Support is available to help coordinate third-party vendors
                  and keep work aligned with the original plan.
                </p>
              </div>
              <ul className="mt-6 space-y-3 sm:mt-0 sm:min-w-[280px]">
                {[
                  'Vendor coordination and guidance',
                  'Scope and quality alignment',
                  'Pricing varies based on project scope',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="text-tagline mt-0.5 size-4 shrink-0" strokeWidth={2.5} />
                    <span className="text-muted-foreground text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-muted-foreground mt-6 text-center text-xs leading-relaxed">
            Get Real Ready provides analysis, planning, and coordination support.
            We are not a licensed contractor and do not perform construction work
            directly. All work is completed by licensed third-party vendors.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-background px-6 py-16 sm:py-20 lg:px-0">
        <div className="container mx-auto max-w-2xl px-0 md:px-6">
          <h2 className="text-foreground text-2xl font-medium tracking-tight">
            How It Works
          </h2>
          <ol className="mt-8 space-y-6">
            {HOW_IT_WORKS.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="bg-accent text-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium">
                  {i + 1}
                </span>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
