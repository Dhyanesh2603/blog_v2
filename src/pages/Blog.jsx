import { useState } from 'react';
import { motion } from 'motion/react';
import ArticleCard from '../components/blog/ArticleCard';
import CategoryFilter from '../components/blog/CategoryFilter';
import { posts, categories, getPostsByCategory } from '../data/posts';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredPosts = getPostsByCategory(activeCategory);

  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Floating Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-12"
        >
          <p className="text-overline text-[var(--color-series-blue)] font-bold tracking-widest mb-3">Archive</p>
          <h1 className="text-display text-[var(--color-primary)] font-serif mb-4">
            All writing
          </h1>
          <p className="text-body text-[var(--color-secondary)] text-lg leading-relaxed">
            Field notes, family oral histories, and reflections on educational and cultural responsiveness.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        {/* Post Grid with Side-Sliding Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: fromLeft ? -55 : 55 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.65, 
                  delay: (i % 3) * 0.08, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
              >
                <ArticleCard post={post} />
              </motion.div>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-body text-[var(--color-muted)]">
              No posts in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
