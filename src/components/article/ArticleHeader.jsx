import { motion } from 'motion/react';
import { formatDate } from '../../lib/utils';

export function ArticleHeader({ post }) {
  if (!post) return null;
  const { title, excerpt, categoryLabel, coverImage, date, readTime, author } = post;
  const authorName = typeof author === 'string' ? author : (author?.name || 'Siddarth Santosh');

  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-4xl mx-auto px-6 text-center pt-24"
    >
      {categoryLabel && (
        <span className="inline-block px-3.5 py-1 rounded-full bg-[var(--color-elevated)] border border-[var(--color-border)] text-caption text-[var(--color-primary)] font-medium">
          {categoryLabel}
        </span>
      )}
      
      <h1 className="text-display mt-6">{title}</h1>
      
      {excerpt && (
        <p className="text-body text-[var(--color-secondary)] mt-4 max-w-2xl mx-auto">
          {excerpt}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-caption text-[var(--color-muted)]">
        {authorName && (
          <span className="text-[var(--color-primary)] font-semibold">{authorName}</span>
        )}
        {date && (
          <div className="flex items-center gap-2">
            <span>{formatDate(date)}</span>
          </div>
        )}
        {readTime && (
          <div className="flex items-center gap-2">
            <span>{readTime}</span>
          </div>
        )}
      </div>

      {coverImage && (
        <div className="mt-12 max-w-5xl mx-auto">
          <img 
            src={coverImage} 
            alt={title} 
            className="w-full h-auto aspect-[16/9] object-cover rounded-2xl border border-[var(--color-border)] shadow-md"
          />
        </div>
      )}
    </motion.header>
  );
}

export default ArticleHeader;
