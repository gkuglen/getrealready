'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const CALENDLY_URL =
  'https://calendly.com/graykuglen/getrealready-introduction?hide_event_type_details=1';

interface CalendlyButtonProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  children?: React.ReactNode;
  onClick?: () => void;
}

export function CalendlyButton({
  className,
  variant = 'default',
  children = 'Request a Property Review',
  onClick,
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
    <Button
      size="sm"
      variant={variant}
      // Pill shape to match the site's other primary buttons.
      className={cn('rounded-full', className)}
      onClick={() => {
        openCalendly();
        onClick?.();
      }}
    >
      {children}
    </Button>
  );
}
