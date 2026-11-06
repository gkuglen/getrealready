import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

// The self-serve tool's flow, in its order. Replaced three template sections
// on the homepage ("What We Do", "Start With Clarity", "How It Works") that
// each restated "compare your unit to the market".
const STEPS = [
  {
    title: 'Enter your address',
    description:
      'Get Rent Ready finds similar rentals nearby, matched to your unit’s size.',
  },
  {
    title: 'See how you compare',
    description:
      'Your unit is graded against those comps, with the rent range they support.',
  },
  {
    title: 'Set your rent',
    description:
      'List at the number the market supports, or see which features are holding your rent back.',
  },
];

const GrrHowItWorks = () => {
  return (
    <section id="grr-how-it-works" className="bg-accent px-6 lg:px-0">
      <div className="container px-0 py-16 sm:py-20 md:px-6 md:py-28">
        <h2 className="text-foreground mx-auto max-w-3xl text-center text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl md:text-6xl">
          See where your rent stands in a few minutes
        </h2>
        <ol className="mx-auto mt-12 grid max-w-5xl gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="border-foreground/15 border-t pt-6">
              <span className="text-sm text-[#3550D9] font-semibold tabular-nums">
                Step {i + 1}
              </span>
              <h3 className="text-foreground mt-2 text-xl font-medium sm:text-2xl">
                {step.title}
              </h3>
              <p className="text-muted-foreground mt-2 max-w-[40ch] text-base text-pretty">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
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
