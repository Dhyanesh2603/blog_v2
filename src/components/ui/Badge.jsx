import { cn } from '../../lib/utils';

export default function Badge({ className, children, ...props }) {
  return (
    <span 
      className={cn(
        "inline-flex items-center rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-[12px] font-medium uppercase tracking-wider text-[var(--color-accent)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
