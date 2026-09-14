import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

export function TableOfContents({ items }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <nav className="hidden lg:block sticky top-32 w-56">
      <h3 className="text-overline text-[var(--color-muted)] mb-4">On this page</h3>
      <ul className="space-y-2">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "block border-l-2 pl-3 py-1.5 text-caption transition-colors duration-200",
                  isActive
                    ? "border-[var(--color-accent)] text-[var(--color-primary)] font-medium"
                    : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-primary)]"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item.id);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default TableOfContents;
