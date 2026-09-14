import React from 'react';
import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { formatDate, cn } from '../../lib/utils';

const seriesStyles = {
  'india-project': {
    block: 'bg-[var(--color-series-blue-block)]',
    accent: 'text-[var(--color-series-blue)]',
    badgeBg: 'bg-[var(--color-series-blue-soft)]',
    badgeBorder: 'border-[var(--color-series-blue)]/20',
  },
  'family': {
    block: 'bg-[var(--color-series-tan-block)]',
    accent: 'text-[var(--color-series-tan)]',
    badgeBg: 'bg-[var(--color-series-tan-soft)]',
    badgeBorder: 'border-[var(--color-series-tan)]/20',
  },
  'culture': {
    block: 'bg-[var(--color-series-terra-block)]',
    accent: 'text-[var(--color-series-terra)]',
    badgeBg: 'bg-[var(--color-series-terra-soft)]',
    badgeBorder: 'border-[var(--color-series-terra)]/20',
  },
};

export default function ArticleCard({ post, className }) {
  if (!post) return null;
  const isForthcoming = post.status === 'forthcoming';
  const series = seriesStyles[post.category] || seriesStyles['india-project'];

  return (
    <Link 
      to={`/blog/${post.slug}`}
      className={cn(
        "group relative flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover hover:border-[var(--color-border-hover)]",
        isForthcoming && "opacity-85",
        className
      )}
    >
      {/* Permanent Solid Color Block Thumbnail (No photos on cards, permanent v2 spec) */}
      <div className="p-4 pb-0 relative">
        <div 
          className={cn(
            "w-full h-28 sm:h-32 rounded-xl transition-transform duration-500 ease-out group-hover:scale-[1.015] border border-[var(--color-border)]/40 flex items-start justify-between p-3.5",
            series.block
          )}
        >
          {post.chapter ? (
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[var(--color-surface)]/85 backdrop-blur text-[var(--color-primary)] shadow-xs">
              {post.chapter}
            </span>
          ) : <span />}
          
          <div className="w-7 h-7 rounded-full bg-[var(--color-surface)]/85 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 shadow-xs">
            <ArrowUpRight size={14} className={series.accent} />
          </div>
        </div>
      </div>

      <div className="p-6 pt-5 flex flex-col flex-grow">
        <div className="mb-3">
          <span 
            className={cn(
              "inline-block px-2.5 py-1 rounded-full border text-[11px] font-semibold uppercase tracking-wider",
              series.accent,
              series.badgeBg,
              series.badgeBorder
            )}
          >
            {post.categoryLabel || post.category}
          </span>
        </div>
        
        <h3 className="text-heading-2 text-[var(--color-primary)] mb-2 line-clamp-2 transition-colors duration-200 group-hover:text-[var(--color-primary)]">
          {post.title}
        </h3>
        
        <p className="text-body-sm text-[var(--color-secondary)] line-clamp-2 mb-6 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center text-caption text-[var(--color-muted)] gap-2 mt-auto pt-4 border-t border-[var(--color-border)]/50">
          <span>{formatDate(post.date)}</span>
          <span className="opacity-50">·</span>
          {isForthcoming ? (
            <span className="bg-[var(--color-elevated)] px-2 py-0.5 rounded text-[var(--color-secondary)] text-[11px] font-medium">
              Forthcoming
            </span>
          ) : (
            <span>{post.readTime || '5 min read'}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export { ArticleCard };
