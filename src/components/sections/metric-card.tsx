import { cn } from '@/lib/utils';

interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  className?: string;
}

export function MetricCard({
  label,
  value,
  change,
  changeType = 'neutral',
  className,
}: MetricCardProps) {
  return (
    <div className={cn('rounded-lg bg-muted/50 p-5', className)}>
      <p className="text-muted-foreground min-h-[2.5rem] text-xs uppercase leading-tight tracking-wide">
        {label}
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="text-foreground text-2xl font-semibold">{value}</p>
        {change && (
          <span
            className={cn(
              'text-sm font-medium',
              changeType === 'positive' && 'text-emerald-600',
              changeType === 'negative' && 'text-red-500',
              changeType === 'neutral' && 'text-muted-foreground',
            )}
          >
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
