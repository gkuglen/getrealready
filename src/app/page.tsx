import GrrHero from '@/components/sections/grr-hero';
import GrrHowItWorks from '@/components/sections/grr-how-it-works';
import GrrTurnover from '@/components/sections/grr-turnover';
import MetafiCta from '@/components/sections/matafi-cta';

// Pricing-first homepage. The template's renovation/services sections
// (metafi-integrations, -testimonials, -feature-benefits, -features-included,
// -all-integrations, -job-openings) were removed from here on 2026-11-05;
// their files stay because other pages still import some of them.
export default function Home() {
  return (
    <>
      <GrrHero />
      <GrrTurnover />
      <GrrHowItWorks />
      <MetafiCta
        title="Rather talk it through?"
        subtitle="In a 15-minute call, Gray walks through your unit’s comps and the rent range it supports."
        points={[
          'Estimated rent range based on nearby comps',
          'What higher-rent units nearby are doing differently',
          'What to change, if anything, before you re-list',
        ]}
      />
    </>
  );
}
