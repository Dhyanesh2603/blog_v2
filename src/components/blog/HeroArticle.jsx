import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { formatDate } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';

export default function HeroArticle({ post }) {
  if (!post) return null;

  const authorName = typeof post.author === 'string' ? post.author : (post.author?.name || 'Siddarth Santosh');
  const initial = (authorName || 'S')[0].toUpperCase();

  return (
    <motion.section 
      initial={{ x: -70, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-7xl mx-auto px-6"
    >
      <Link to={`/blog/${post.slug}`} className="group block">
        {/* Theme-Aligned Cover Header (Consistent with modern editorial theme) */}
        <div className="w-full h-40 sm:h-52 md:h-60 rounded-2xl bg-gradient-to-br from-[var(--color-elevated)] via-[var(--color-surface)] to-[var(--color-subtle)] mb-5 transition-all duration-500 ease-out group-hover:scale-[1.008] border border-[var(--color-border)] shadow-sm hover:shadow-md relative overflow-hidden flex flex-col justify-between p-5 sm:p-7">
          {/* Domain Generative Telemetry SVG Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-40 dark:opacity-45 pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <radialGradient id="hero-ip-aura" cx="80%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-ip-aura)" />
            <circle cx="80%" cy="40%" r="50" fill="none" stroke="#6366F1" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
            <circle cx="80%" cy="40%" r="100" fill="none" stroke="#6366F1" strokeWidth="1" opacity="0.45" />
            <circle cx="80%" cy="40%" r="160" fill="none" stroke="#6366F1" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" />
            <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#6366F1" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />
          </svg>

          <div className="relative z-10 flex items-center justify-between">
            <span className="text-overline text-[var(--color-primary)] font-bold tracking-widest bg-[var(--color-surface)]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--color-border)] shadow-xs">
              {post.chapter || 'Chapter 1'}
            </span>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface)]/90 backdrop-blur text-caption text-[var(--color-primary)] font-medium border border-[var(--color-border)] shadow-xs transition-all duration-300 group-hover:translate-x-1 group-hover:border-[var(--color-border-hover)]">
              <span>Read Chapter</span>
              <ArrowRight size={14} className="text-[var(--color-accent)]" />
            </div>
          </div>

          <div className="relative z-10 flex items-baseline justify-between">
            <p className="text-caption font-semibold uppercase tracking-wider text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
              {post.categoryLabel || 'The India Project'}
            </p>
            <span className="text-caption text-[var(--color-muted)] font-medium sm:hidden">
              {post.readTime || '6 min read'}
            </span>
          </div>
        </div>
        
        <div className="max-w-4xl">
          <div className="mb-2.5">
            <span className="inline-block px-3 py-1 rounded-full border border-[var(--color-accent)]/20 text-caption text-[var(--color-accent)] bg-[var(--color-accent-soft)] font-medium uppercase tracking-wider">
              {post.categoryLabel || post.category}
            </span>
          </div>
          
          <h1 className="text-display text-[var(--color-primary)] mb-2.5 line-clamp-2 transition-colors duration-200 group-hover:text-[var(--color-accent)]">
            {post.title}
          </h1>
          
          <p className="text-body text-[var(--color-secondary)] mb-4 line-clamp-2 max-w-3xl">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2.5 text-caption text-[var(--color-muted)]">
              <span className="font-semibold text-[var(--color-primary)]">
                {authorName}
              </span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime || '6 min read'}</span>
            </div>
            
            <div className="hidden md:flex items-center text-[var(--color-series-blue)] font-medium gap-2 transition-transform duration-300 group-hover:translate-x-1">
              Read Story <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </Link>
    </motion.section>
  );
}
