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
        {/* Permanent Solid Color Block Header (Zero photos on homepage as per v2 spec) */}
        <div className="w-full h-44 sm:h-56 md:h-64 rounded-2xl bg-[var(--color-series-blue-block)] mb-8 transition-transform duration-500 ease-out group-hover:scale-[1.008] border border-[var(--color-border)]/60 relative overflow-hidden flex flex-col justify-between p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <span className="text-overline text-[var(--color-series-blue)] font-bold tracking-widest bg-[var(--color-surface)]/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-[var(--color-border)] shadow-xs">
              {post.chapter || 'Chapter 1'}
            </span>
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)]/90 backdrop-blur text-caption text-[var(--color-primary)] font-medium border border-[var(--color-border)] shadow-xs transition-transform duration-300 group-hover:translate-x-1">
              <span>Read Chapter</span>
              <ArrowRight size={14} className="text-[var(--color-series-blue)]" />
            </div>
          </div>

          <div className="flex items-baseline justify-between">
            <p className="text-caption font-semibold uppercase tracking-wider text-[var(--color-series-blue)] opacity-90">
              {post.categoryLabel || 'The India Project'}
            </p>
            <span className="text-caption text-[var(--color-secondary)] font-medium sm:hidden">
              {post.readTime || '6 min read'}
            </span>
          </div>
        </div>
        
        <div className="max-w-4xl">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full border border-[var(--color-series-blue)]/25 text-caption text-[var(--color-series-blue)] bg-[var(--color-series-blue-soft)] font-medium uppercase tracking-wider">
              {post.categoryLabel || post.category}
            </span>
          </div>
          
          <h1 className="text-display text-[var(--color-primary)] mb-5 line-clamp-2 transition-colors duration-200 group-hover:text-[var(--color-series-blue)]">
            {post.title}
          </h1>
          
          <p className="text-body text-[var(--color-secondary)] mb-8 line-clamp-2 max-w-3xl">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-2">
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
