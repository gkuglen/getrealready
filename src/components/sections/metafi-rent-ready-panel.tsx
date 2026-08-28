import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const MetafiRentReadyPanel = () => {
  return (
    <section id="grr-rent-ready" className="w-full bg-[#F0EDE5] px-6 lg:px-0">
      <div className="container px-0 py-12 text-center sm:py-16 md:px-6 md:py-20">
        <div className="bg-background border-border-light mx-auto mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1">
          <span className="bg-success inline-block h-2 w-2 rounded-full" />
          <span className="text-foreground text-xs font-medium tracking-wide uppercase">
            Now available
          </span>
        </div>
        <h2 className="text-foreground mx-auto max-w-2xl text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl">
          Get Rent Ready is live in Oakland
        </h2>
        <p className="text-foreground mx-auto mt-6 max-w-xl text-lg font-medium sm:text-xl">
          See how your rental property compares.
        </p>
        <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-base sm:text-lg">
          Get Rent Ready compares your units to similar Oakland rentals to show
          where your rents stand and where there may be opportunities to
          improve.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            asChild
            className="w-full bg-[#4D6CFA] text-white hover:bg-[#3D5CE8] sm:w-auto"
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

export default MetafiRentReadyPanel;
