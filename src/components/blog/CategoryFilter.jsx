import React from 'react';
import { cn } from '../../lib/utils';

export default function CategoryFilter({ categories = [], activeCategory = 'all', onCategoryChange, className = '' }) {
  // Ensure we have a clean list of filter options with 'all' as the first option "All Articles"
  const filterList = [
    { id: 'all', label: 'All Articles' },
    ...categories.filter(c => c.id !== 'all')
  ];

  return (
    <div 
      className={cn("flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none", className)}
      role="radiogroup"
      aria-label="Filter by category"
    >
      {filterList.map((category) => {
        const isActive = activeCategory === category.id || (category.id === 'all' && !activeCategory);
        return (
          <button
            key={category.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-caption font-medium transition-all duration-200 whitespace-nowrap cursor-pointer shadow-xs",
              isActive
                ? "bg-[var(--color-primary)] text-[var(--color-inverse)] border border-[var(--color-primary)] font-semibold shadow-sm"
                : "bg-[var(--color-surface)] text-[var(--color-secondary)] hover:text-[var(--color-primary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)]"
            )}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
