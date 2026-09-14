import React from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { formatDate, cn } from '../../lib/utils';

export default function ArticleCard({ post, className }) {
  if (!post) return null;
  const isForthcoming = post.status === 'forthcoming';

  return (
    <Link 
      to={`/blog/${post.slug}`}
      className={cn(
        "group relative flex flex-col h-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover hover:border-[var(--color-border-hover)]",
        isForthcoming && "opacity-90",
        className
      )}
    >
      {/* ── Theme-Aligned Cover Banner (Consistent & Premium, No Loud/Random Colors) ── */}
      <div className="relative w-full h-36 sm:h-40 bg-gradient-to-br from-[var(--color-elevated)] via-[var(--color-surface)] to-[var(--color-subtle)] border-b border-[var(--color-border)]/70 p-4 flex flex-col justify-between overflow-hidden">
        {/* Subtle Ambient Theme Glow */}
        <div 
          className="absolute -top-10 -right-10 w-28 h-28 bg-[var(--color-accent)]/8 rounded-full blur-xl group-hover:scale-125 group-hover:bg-[var(--color-accent)]/15 transition-all duration-500 pointer-events-none" 
          aria-hidden="true"
        />

        {/* Top Bar: Chapter Pill (if available) + Hover Arrow */}
        <div className="relative z-10 flex items-center justify-between w-full">
          {post.chapter ? (
            <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--color-surface)]/90 backdrop-blur-md text-[var(--color-primary)] border border-[var(--color-border)] shadow-xs">
              {post.chapter}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[var(--color-muted)]">
              <BookOpen size={12} className="text-[var(--color-accent)]" />
              <span>Field Note</span>
            </span>
          )}

          <div className="w-7 h-7 rounded-full bg-[var(--color-surface)]/90 backdrop-blur-md border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] group-hover:text-[var(--color-primary)] group-hover:border-[var(--color-border-hover)] transition-all duration-300 group-hover:scale-110 shadow-xs">
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Bottom Bar: Clean Category Badge Aligned with Theme */}
        <div className="relative z-10">
          <span className="inline-flex items-center text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-md bg-[var(--color-surface)]/85 backdrop-blur-md text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] border border-[var(--color-border)]/80 transition-colors shadow-2xs">
            {post.categoryLabel || post.category}
          </span>
        </div>
      </div>

      {/* ── Card Body (Guaranteed Uniform Sizing Across All Cards) ── */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Uniform Title Height: fixed 3.25rem space for perfect alignment */}
          <div className="min-h-[3.25rem] flex items-start mb-2">
            <h3 className="text-[17px] sm:text-[19px] font-semibold font-serif text-[var(--color-primary)] leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-[var(--color-accent)]">
              {post.title}
            </h3>
          </div>

          {/* Uniform Excerpt Height: fixed 2.75rem space for perfect alignment */}
          <div className="min-h-[2.75rem] flex items-start mb-4">
            <p className="text-body-sm text-[var(--color-secondary)] line-clamp-2 leading-relaxed text-xs sm:text-[13px]">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Footer Meta Row: Pinned to bottom */}
        <div className="pt-3.5 mt-auto border-t border-[var(--color-border)]/60 flex items-center justify-between text-caption text-[var(--color-muted)]">
          <div className="flex items-center gap-1.5">
            <Calendar size={12} className="opacity-70" />
            <span>{formatDate(post.date)}</span>
          </div>

          {isForthcoming ? (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[var(--color-elevated)] border border-[var(--color-border)] text-[var(--color-muted)] text-[10.5px] font-medium tracking-wide">
              Forthcoming
            </span>
          ) : (
            <div className="flex items-center gap-1.5">
              <Clock size={12} className="opacity-70" />
              <span>{post.readTime || '5 min read'}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export { ArticleCard };
