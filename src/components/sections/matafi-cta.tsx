import { Calendar } from 'lucide-react';

import { CalendlyButton } from '@/components/ui/calendly-button';

type MetafiCtaProps = {
  title?: string;
  subtitle?: string;
  /** Bullet list shown under the subtitle. Without it, a subtitle stands alone. */
  points?: string[];
};

const MetafiCta = ({
  title = 'See how your unit compares to higher-rent apartments nearby',
  subtitle,
  points,
}: MetafiCtaProps) => {
  return (
    <section
      id="grr-cta"
      className="relative overflow-hidden bg-[#3D5CE8] px-6"
    >
      {/* dotted pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-[size:16px_16px] [color:oklch(1_0_89.88)] opacity-30" />
      {/* centered solid strip */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-full w-[500px] -translate-x-1/2 bg-[#3D5CE8]" />

      <div className="relative container px-0 py-16 text-center sm:py-20 md:px-6 md:py-28">
        <h2 className="text-primary-foreground mx-auto max-w-4xl text-4xl leading-tight font-medium text-balance sm:text-5xl md:text-6xl">
          {title}
        </h2>

        {subtitle ? (
          <>
            <p className="text-primary-foreground mx-auto mt-6 max-w-2xl text-base font-normal text-pretty sm:text-lg">
              {subtitle}
            </p>
            {points && (
              <ul className="text-primary-foreground mx-auto mt-4 w-fit max-w-md list-disc space-y-2 pl-5 text-left text-base text-pretty marker:text-white/70 sm:text-lg">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <>
            <p className="text-primary-foreground mx-auto mt-6 max-w-2xl text-base font-normal text-pretty sm:text-lg">
              In a 15-min review, you&apos;ll see:
            </p>
            <ul className="text-primary-foreground mx-auto mt-4 w-fit max-w-md list-disc space-y-2 pl-5 text-left text-base text-pretty marker:text-white/70 sm:text-lg">
              <li>Estimated rent range based on nearby comps</li>
              <li>What higher-performing units are doing differently</li>
              <li>Suggested upgrades and expected rent impact</li>
              <li>Rough renovation budget to reach the next level</li>
            </ul>
            <p className="text-primary-foreground mx-auto mt-4 max-w-2xl text-sm">
              No automated reports—just clear, practical guidance.
            </p>
          </>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <CalendlyButton className="h-11 w-full bg-[#32322C] px-5 text-white hover:bg-[#32322C]/90 sm:w-auto">
            <Calendar className="size-4" />
            Talk with Gray
          </CalendlyButton>
          <p className="text-primary-foreground text-sm italic">
            Takes 15 minutes • No pressure • Just insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetafiCta;
