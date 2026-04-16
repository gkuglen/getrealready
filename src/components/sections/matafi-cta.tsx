import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { CalendlyButton } from '@/components/ui/calendly-button';

const MetafiCta = () => {
  return (
    <section
      id="grr-cta"
      className="relative overflow-hidden bg-[#4D6CFA] px-6"
    >
      {/* dotted pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-[size:16px_16px] [color:oklch(1_0_89.88)] opacity-30" />
      {/* centered solid strip */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-full w-[500px] -translate-x-1/2 bg-[#4D6CFA]" />

      <div className="relative container px-0 py-16 text-center sm:py-20 md:px-6 md:py-28">
        <h2 className="text-primary-foreground mx-auto max-w-4xl text-4xl leading-tight font-medium text-balance sm:text-5xl md:text-6xl">
          Want to understand what your unit could rent for?
        </h2>

        <p className="text-primary-foreground/80 mx-auto mt-4 max-w-2xl text-base font-normal sm:text-lg">
          We'll review your unit and provide:
        </p>

        <ul className="text-primary-foreground/90 mx-auto mt-4 max-w-md space-y-2 text-base sm:text-lg">
          <li>• Estimated rent range based on local comps</li>
          <li>• Suggested upgrades that could improve rent</li>
          <li>• Rough renovation budget and expected impact</li>
        </ul>

        <p className="text-primary-foreground/70 mx-auto mt-4 max-w-2xl text-sm">
          We review each unit individually—no automated reports, just clear,
          practical guidance.
        </p>

        <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          <CalendlyButton className="bg-primary-foreground text-tagline hover:bg-primary-foreground/90 h-12 w-full rounded-[12px] sm:w-auto" />
          <Button
            asChild
            variant="ghost"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-12 w-full rounded-[12px] border bg-transparent sm:w-auto"
          >
            <Link href="mailto:gray@getrealready.com?subject=Unit Submission">
              Send Us Your Unit
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MetafiCta;
