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
      <div className="relative container px-0 py-16 text-center sm:py-20 md:px-6 md:py-28">
        <h2 className="text-primary-foreground mx-auto max-w-4xl text-4xl leading-[1.1] font-bold tracking-[-0.02em] text-balance sm:text-5xl md:text-6xl">
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
          <p className="text-primary-foreground text-sm">
            Takes 15 minutes • No pressure • Just insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetafiCta;
