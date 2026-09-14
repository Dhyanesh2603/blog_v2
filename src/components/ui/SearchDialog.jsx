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
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredPosts = posts
    ? posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-24 px-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-lg bg-[var(--color-surface)] rounded-2xl shadow-2xl border border-[var(--color-border)] overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center px-4 py-4 border-b border-[var(--color-border)]">
                <Search className="w-5 h-5 text-[var(--color-muted)] mr-3" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="flex-1 bg-transparent text-lg text-[var(--color-primary)] outline-none placeholder-[var(--color-muted)]"
                />
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block px-2 py-1 text-[10px] font-medium text-[var(--color-muted)] bg-[var(--color-elevated)] rounded border border-[var(--color-border)] tracking-widest">
                    ⌘K
                  </span>
                  <button onClick={onClose} className="p-1 text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {query.length > 0 ? (
                  filteredPosts.length > 0 ? (
                    <div className="flex flex-col gap-1">
                      {filteredPosts.map(post => (
                        <Link
                          key={post.slug}
                          to={`/blog/${post.slug}`}
                          onClick={onClose}
                          className="flex flex-col p-4 rounded-xl hover:bg-[var(--color-elevated)] transition-colors group"
                        >
                          <span className="text-[10px] uppercase tracking-wider text-[var(--color-accent)] font-medium mb-1">
                            {post.categoryLabel || post.category}
                          </span>
                          <span className="text-body text-[var(--color-primary)] font-medium mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                            {post.title}
                          </span>
                          <span className="text-body-sm text-[var(--color-secondary)] line-clamp-1">
                            {post.excerpt}
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-[var(--color-secondary)]">
                      No articles found for "{query}"
                    </div>
                  )
                ) : (
                  <div className="p-8 text-center text-[var(--color-muted)] text-sm">
                    Type to start searching...
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
