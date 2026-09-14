import React from 'react';
import { LayoutGrid, Compass, Mic, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

const filterIcons = {
  'all': LayoutGrid,
  'india-project': Compass,
  'family': Mic,
  'culture': Sparkles,
};

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
        const Icon = filterIcons[category.id] || LayoutGrid;

        return (
          <button
            key={category.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-caption font-medium transition-all duration-200 whitespace-nowrap cursor-pointer shadow-xs",
              isActive
                ? "bg-[var(--color-primary)] text-[var(--color-inverse)] border border-[var(--color-primary)] font-semibold shadow-sm"
                : "bg-[var(--color-surface)] text-[var(--color-secondary)] hover:text-[var(--color-primary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)]"
            )}
          >
            <Icon 
              size={12} 
              className={cn(
                "transition-colors",
                isActive 
                  ? "text-[var(--color-inverse)] opacity-90" 
                  : category.id === 'india-project' 
                    ? "text-indigo-500" 
                    : category.id === 'family' 
                      ? "text-amber-500" 
                      : category.id === 'culture' 
                        ? "text-rose-500" 
                        : "opacity-60"
              )} 
            />
            <span>{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}
