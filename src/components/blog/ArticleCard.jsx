import React from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, BookOpen, Clock, Calendar, Compass, Mic, Sparkles } from 'lucide-react';
import { formatDate, cn } from '../../lib/utils';

// ── Domain Visual Configurations (Modern, Generative & Non-Normie) ──
const domainConfig = {
  'india-project': {
    label: 'The India Project',
    icon: Compass,
    accentHex: '#6366F1',
    badgeClass: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/25',
    hoverBorder: 'group-hover:border-indigo-500/40 group-hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)]',
    hoverText: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
    pattern: () => (
      <svg className="absolute inset-0 w-full h-full opacity-65 dark:opacity-50 pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <radialGradient id="ip-aura" cx="85%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#ip-aura)" />
        {/* Global coordinate telemetry arcs */}
        <circle cx="85%" cy="35%" r="35" fill="none" stroke="#6366F1" strokeWidth="1" strokeDasharray="3 3" opacity="0.85" />
        <circle cx="85%" cy="35%" r="70" fill="none" stroke="#6366F1" strokeWidth="1" opacity="0.6" />
        <circle cx="85%" cy="35%" r="110" fill="none" stroke="#6366F1" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
        <line x1="0" y1="52%" x2="100%" y2="52%" stroke="#6366F1" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.4" />
        <line x1="28%" y1="0" x2="28%" y2="100%" stroke="#6366F1" strokeWidth="0.75" opacity="0.25" />
      </svg>
    ),
  },
  'family': {
    label: 'Conversations with My Family',
    icon: Mic,
    accentHex: '#D97706',
    badgeClass: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/25',
    hoverBorder: 'group-hover:border-amber-500/40 group-hover:shadow-[0_8px_30px_rgba(217,119,6,0.12)]',
    hoverText: 'group-hover:text-amber-700 dark:group-hover:text-amber-400',
    pattern: () => (
      <svg className="absolute inset-0 w-full h-full opacity-65 dark:opacity-50 pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <radialGradient id="fam-aura" cx="85%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#fam-aura)" />
        {/* Oral history voice frequency soundwave bars */}
        <g stroke="#D97706" strokeWidth="1.75" strokeLinecap="round" opacity="0.75">
          <line x1="68%" y1="65%" x2="68%" y2="35%" />
          <line x1="73%" y1="78%" x2="73%" y2="22%" />
          <line x1="78%" y1="88%" x2="78%" y2="15%" />
          <line x1="83%" y1="72%" x2="83%" y2="28%" />
          <line x1="88%" y1="85%" x2="88%" y2="18%" />
          <line x1="93%" y1="68%" x2="93%" y2="32%" />
        </g>
        {/* Generational timeline strata curve */}
        <path d="M0,85 Q100,45 220,80 T450,75" fill="none" stroke="#D97706" strokeWidth="1" opacity="0.4" />
        <path d="M0,110 Q120,70 240,105 T480,95" fill="none" stroke="#D97706" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
      </svg>
    ),
  },
  'culture': {
    label: 'A Bit of South Asia',
    icon: Sparkles,
    accentHex: '#E11D48',
    badgeClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/25',
    hoverBorder: 'group-hover:border-rose-500/40 group-hover:shadow-[0_8px_30px_rgba(225,29,72,0.12)]',
    hoverText: 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
    pattern: () => (
      <svg className="absolute inset-0 w-full h-full opacity-65 dark:opacity-50 pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <radialGradient id="sa-aura" cx="85%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F43F5E" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#sa-aura)" />
        {/* Modern architectural heritage geometric lattice */}
        <g stroke="#E11D48" fill="none" strokeWidth="0.85" opacity="0.65">
          <polygon points="270,20 295,45 270,70 245,45" />
          <polygon points="305,20 330,45 305,70 280,45" />
          <polygon points="270,55 295,80 270,105 245,80" strokeDasharray="3 3" />
          <polygon points="305,55 330,80 305,105 280,80" strokeDasharray="3 3" />
          <circle cx="270" cy="45" r="12" strokeWidth="0.75" />
        </g>
        <line x1="0" y1="88%" x2="100%" y2="88%" stroke="#E11D48" strokeWidth="0.75" strokeDasharray="5 5" opacity="0.3" />
      </svg>
    ),
  },
};

export default function ArticleCard({ post, className }) {
  if (!post) return null;
  const isForthcoming = post.status === 'forthcoming';
  const config = domainConfig[post.category] || domainConfig['india-project'];
  const DomainIcon = config.icon;

  return (
    <Link 
      to={`/blog/${post.slug}`}
      className={cn(
        "group relative flex flex-col h-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 shadow-sm hover:shadow-card-hover",
        config.hoverBorder,
        isForthcoming && "opacity-90",
        className
      )}
    >
      {/* ── Bespoke Domain Generative Cover (Modern, Sophisticated & Non-Normie) ── */}
      <div className="relative w-full h-36 sm:h-40 bg-gradient-to-br from-[var(--color-elevated)] via-[var(--color-elevated)]/70 to-[var(--color-subtle)] border-b border-[var(--color-border)] p-4 flex flex-col justify-between overflow-hidden">
        {/* Domain Generative SVG Background (Radar vs Soundwave vs Lattice) */}
        {config.pattern()}

        {/* Top Bar: Chapter Pill (if available) + Interactive Hover Indicator */}
        <div className="relative z-10 flex items-center justify-between w-full">
          {post.chapter ? (
            <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--color-surface)]/90 backdrop-blur-md text-[var(--color-primary)] border border-[var(--color-border)] shadow-xs">
              {post.chapter}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[var(--color-muted)] bg-[var(--color-surface)]/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[var(--color-border)]/60">
              <BookOpen size={11} className="opacity-70" />
              <span>Essay</span>
            </span>
          )}

          <div className="w-7 h-7 rounded-full bg-[var(--color-surface)]/90 backdrop-blur-md border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] group-hover:text-[var(--color-primary)] group-hover:border-[var(--color-border-hover)] transition-all duration-300 group-hover:scale-110 shadow-xs">
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Bottom Bar: Distinctive Domain Badge with Icon */}
        <div className="relative z-10">
          <span className={cn(
            "inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-md backdrop-blur-md border transition-colors shadow-2xs",
            config.badgeClass
          )}>
            <DomainIcon size={11} strokeWidth={2.2} />
            <span>{post.categoryLabel || config.label}</span>
          </span>
        </div>
      </div>

      {/* ── Card Body (Guaranteed Uniform Sizing Across All Cards) ── */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Uniform Title Height: fixed 3rem space for perfect alignment */}
          <div className="min-h-[3rem] flex items-start mb-1.5">
            <h3 className={cn(
              "text-[16px] sm:text-[18px] font-semibold font-serif text-[var(--color-primary)] leading-snug line-clamp-2 transition-colors duration-200",
              config.hoverText
            )}>
              {post.title}
            </h3>
          </div>

          {/* Uniform Excerpt Height: fixed 2.5rem space for perfect alignment */}
          <div className="min-h-[2.5rem] flex items-start mb-3">
            <p className="text-body-sm text-[var(--color-secondary)] line-clamp-2 leading-relaxed text-xs sm:text-[13px]">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Footer Meta Row: Pinned to bottom */}
        <div className="pt-3 mt-auto border-t border-[var(--color-border)]/60 flex items-center justify-between text-caption text-[var(--color-muted)]">
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
