import useScrollProgress from '../../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  if (progress <= 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] w-full bg-transparent pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-[var(--color-accent)] via-purple-500 to-indigo-600 origin-left will-change-transform"
        style={{ 
          transform: `scaleX(${Math.max(0, Math.min(1, progress / 100))})`,
        }}
      />
    </div>
  );
}
