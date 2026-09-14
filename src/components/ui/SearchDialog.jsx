import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { Search, X } from 'lucide-react';
import { posts } from '../../data/posts';

export default function SearchDialog({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Pause Lenis smooth scroll while dialog is open so inner container scrolls freely
      window.__lenis?.stop();
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setQuery('');
      window.__lenis?.start();
      document.body.style.overflow = '';
    }

    return () => {
      window.__lenis?.start();
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredPosts = posts && query.trim().length > 0
    ? posts.filter(post => {
        const q = query.toLowerCase().trim();
        return (
          post.title?.toLowerCase().includes(q) ||
          post.excerpt?.toLowerCase().includes(q) ||
          post.categoryLabel?.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-start justify-center pt-20 sm:pt-28 px-4"
          onClick={onClose}
        >
          <motion.div
            data-lenis-prevent="true"
            initial={{ opacity: 0, scale: 0.96, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg bg-[var(--color-surface)] rounded-2xl shadow-2xl border border-[var(--color-border)] overflow-hidden flex flex-col"
            onClick={e => e.stopPropagation()}
            onWheel={e => e.stopPropagation()}
            onTouchMove={e => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-[var(--color-border)]">
              <Search className="w-5 h-5 text-[var(--color-muted)] mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="flex-1 bg-transparent text-base sm:text-lg text-[var(--color-primary)] outline-none placeholder-[var(--color-muted)]"
              />
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold text-[var(--color-muted)] bg-[var(--color-elevated)] rounded border border-[var(--color-border)] tracking-wider">
                  ESC
                </span>
                <button 
                  type="button"
                  onClick={onClose} 
                  className="p-1.5 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-elevated)] transition-colors cursor-pointer"
                  aria-label="Close search"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Scrollable Results Area with Full Wheel & Touch Support */}
            <div 
              data-lenis-prevent="true"
              onWheel={e => e.stopPropagation()}
              onTouchMove={e => e.stopPropagation()}
              className="max-h-[55vh] sm:max-h-[360px] overflow-y-auto overscroll-contain p-2 scrollbar-thin"
              style={{
                scrollbarWidth: 'thin',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {query.trim().length > 0 ? (
                filteredPosts.length > 0 ? (
                  <div className="flex flex-col gap-1.5">
                    <div className="px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                      {filteredPosts.length} result{filteredPosts.length > 1 ? 's' : ''}
                    </div>
                    {filteredPosts.map(post => (
                      <Link
                        key={post.slug}
                        to={`/blog/${post.slug}`}
                        onClick={onClose}
                        className="flex flex-col p-3.5 rounded-xl hover:bg-[var(--color-elevated)] border border-transparent hover:border-[var(--color-border)] transition-all group"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10.5px] uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                            {post.categoryLabel || post.category}
                          </span>
                          {post.readTime && (
                            <span className="text-[11px] text-[var(--color-muted)]">
                              {post.readTime}
                            </span>
                          )}
                        </div>
                        <span className="text-body text-[var(--color-primary)] font-medium mb-1 group-hover:text-[var(--color-accent)] transition-colors line-clamp-1">
                          {post.title}
                        </span>
                        <span className="text-body-sm text-[var(--color-secondary)] line-clamp-2 text-xs">
                          {post.excerpt}
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 px-6 text-center text-[var(--color-secondary)] text-sm">
                    No articles found matching <span className="font-semibold text-[var(--color-primary)]">"{query}"</span>
                  </div>
                )
              ) : (
                <div className="py-10 px-6 text-center text-[var(--color-muted)] text-sm">
                  Type an article title, topic, or keyword to search...
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
