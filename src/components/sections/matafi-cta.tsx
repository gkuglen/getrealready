import { CalendlyButton } from '@/components/ui/calendly-button';

type MetafiCtaProps = {
  title?: string;
  subtitle?: string;
};

const MetafiCta = ({
  title = 'See how your unit compares to higher-rent apartments nearby',
  subtitle,
}: MetafiCtaProps) => {
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
          {title}
        </h2>

        {subtitle ? (
          <p className="text-primary-foreground/80 mx-auto mt-6 max-w-2xl text-base font-normal sm:text-lg">
            {subtitle}
          </p>
        ) : (
          <>
            <p className="text-primary-foreground/80 mx-auto mt-6 max-w-2xl text-base font-normal sm:text-lg">
              In a 15-min review, you&apos;ll see:
            </p>
            <ul className="text-primary-foreground/90 mx-auto mt-4 max-w-md space-y-2 text-base sm:text-lg">
              <li>• Estimated rent range based on nearby comps</li>
              <li>• What higher-performing units are doing differently</li>
              <li>• Suggested upgrades and expected rent impact</li>
              <li>• Rough renovation budget to reach the next level</li>
            </ul>
            <p className="text-primary-foreground/70 mx-auto mt-4 max-w-2xl text-sm">
              No automated reports—just clear, practical guidance.
            </p>
          </>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <CalendlyButton className="bg-primary-foreground text-tagline hover:bg-primary-foreground/90 w-full sm:w-auto">
            See My Rent Potential
          </CalendlyButton>
          <p className="text-primary-foreground/60 text-sm italic">
            Takes 15 minutes • No pressure • Just insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetafiCta;
