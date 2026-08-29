'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { CityNotifyModal } from '@/components/city-notify-modal';
import { Button } from '@/components/ui/button';

const MetafiRentReadyPanel = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="grr-rent-ready"
      className="w-full bg-[#32322C] px-6 py-16 text-center sm:px-10 sm:py-20 md:py-[88px]"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F76F8E] px-3.5 py-1.5 text-[13px] font-semibold text-white">
          Now available
        </span>
        <h2 className="max-w-2xl text-3xl leading-tight font-extrabold text-balance text-white sm:text-4xl md:text-5xl">
          Get Rent Ready is now available in{' '}
          <span className="text-[#F76F8E]">Oakland</span>
        </h2>
        <p className="max-w-xl text-lg font-semibold text-[#F76F8E] sm:text-xl">
          See how your rental property compares.
        </p>
        <p className="max-w-xl text-base leading-relaxed text-balance text-[#c9c9c0] sm:text-lg">
          Get Rent Ready compares your units to similar Oakland rentals to show
          where your rents stand and where there may be opportunities to
          improve.
        </p>
        <Button
          asChild
          className="mt-2 w-full bg-[#4D6CFA] text-white hover:bg-[#3D5CE8] sm:w-auto"
        >
          <Link href="/tool">
            Analyze My Property — Free
            <ArrowRight className="size-4" />
          </Link>
        </Button>
        <div className="mt-4 flex flex-wrap justify-center gap-3.5">
          <span className="rounded-full bg-[#3d3d35] px-4 py-2 text-[13px] font-medium text-[#D2E0BF]">
            Free to use
          </span>
          <span className="rounded-full bg-[#3d3d35] px-4 py-2 text-[13px] font-medium text-[#D2E0BF]">
            Coming soon to other Bay Area cities —{' '}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="font-semibold text-white underline underline-offset-2"
            >
              get notified
            </button>
          </span>
          <span className="rounded-full bg-[#3d3d35] px-4 py-2 text-[13px] font-medium text-[#D2E0BF]">
            No commitment
          </span>
        </div>
      </div>

      <CityNotifyModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        source="getrealready-homepage"
      />
    </section>
  );
};

export default MetafiRentReadyPanel;
