'use client';

import { Button } from '@/components/ui/button';

const CALENDLY_URL =
  'https://calendly.com/graykuglen/getrealready-introduction?hide_event_type_details=1';

interface CalendlyButtonProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  children?: React.ReactNode;
}

export function CalendlyButton({
  className,
  variant = 'default',
  children = 'Request a Property Review',
}: CalendlyButtonProps) {
  function openCalendly() {
    const win = window as Window & {
      Calendly?: { initPopupWidget: (opts: { url: string }) => void };
    };
    if (typeof window !== 'undefined' && win.Calendly) {
      win.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  }

  return (
    <Button variant={variant} className={className} onClick={openCalendly}>
      {children}
    </Button>
  );
}
