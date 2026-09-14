import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, BookOpen } from 'lucide-react';
import HeroArticle from '../components/blog/HeroArticle';
import BentoGrid from '../components/blog/BentoGrid';
import CategoryFilter from '../components/blog/CategoryFilter';
import NewsletterCTA from '../components/ui/NewsletterCTA';
import { posts, categories, getFeaturedPost, getPostsByCategory } from '../data/posts';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const featured = getFeaturedPost();
  const filteredPosts = getPostsByCategory(activeCategory);

  return (
    <>
      {/* ── 1. Premium Editorial Masthead (Modern UI + Required Content) ── */}
      <section className="relative pt-6 pb-8 md:pt-10 md:pb-12 overflow-hidden">
        {/* Subtle Ambient Background Bloom */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[var(--color-series-blue)]/6 via-[var(--color-accent)]/4 to-transparent blur-3xl pointer-events-none rounded-full -z-10" 
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Overline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-xl shadow-xs mb-4 sm:mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-series-blue)] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary)]">
              Field notes and other writing
            </span>
          </motion.div>

          {/* Master Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.12] tracking-[-0.035em] text-[var(--color-primary)] font-medium max-w-4xl mx-auto mb-3 sm:mb-4"
          >
            Small thoughts, honestly shared
          </motion.h1>

          {/* Editorial Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-body text-[var(--color-secondary)] max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-normal leading-relaxed"
          >
            Essays on people, place, and the questions that follow me home.
          </motion.p>

          {/* Interactive Series Navigator Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-6 sm:mt-7"
          >
            <a 
              href="#featured-chapter"
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs text-caption text-[var(--color-primary)] font-medium transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:shadow-sm hover:-translate-y-0.5"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              <span>The India Project</span>
              <ArrowDown size={13} className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
            </a>

            <button 
              onClick={() => {
                setActiveCategory('family');
                document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs text-caption text-[var(--color-primary)] font-medium transition-all duration-300 hover:border-[var(--color-border-hover)] hover:shadow-sm hover:-translate-y-0.5 cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)]" />
              <span>Conversations with My Family</span>
              <span className="text-[10px] text-[var(--color-muted)] font-mono">· 3 parts</span>
            </button>

            <button 
              onClick={() => {
                setActiveCategory('culture');
                document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs text-caption text-[var(--color-primary)] font-medium transition-all duration-300 hover:border-[var(--color-border-hover)] hover:shadow-sm hover:-translate-y-0.5 cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-muted)]" />
              <span>A Bit of South Asia</span>
              <span className="text-[10px] text-[var(--color-muted)] font-mono">· 3 stories</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Featured Chapter One (Appears AFTER Intro) ── */}
      <section id="featured-chapter" className="py-10 md:py-14 border-t border-[var(--color-border)]/60 bg-[var(--color-elevated)]/25">
        <div className="max-w-7xl mx-auto px-6 mb-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-between"
          >
            <div>
              <p className="text-overline text-[var(--color-series-blue)] font-bold tracking-widest mb-1.5">
                Featured Narrative · Series 01
              </p>
              <h2 className="text-heading-1 text-[var(--color-primary)] font-serif">
                The India Project
              </h2>
            </div>
            <a 
              href="#library" 
              className="hidden sm:inline-flex items-center gap-1.5 text-caption font-medium text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              View all library chapters <ArrowDown size={14} />
            </a>
          </motion.div>
        </div>

        {/* Chapter 1 Card slides in smoothly from the side */}
        <HeroArticle post={featured} />
      </section>

      {/* ── 3. Writing Library with Side-Sliding Cards ── */}
      <section id="library" className="py-10 md:py-14 border-t border-[var(--color-border)]/60">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <div>
                <p className="text-overline text-[var(--color-muted)] font-semibold tracking-widest mb-1.5">Archive</p>
                <h2 className="text-heading-1 text-[var(--color-primary)] font-serif">
                  All Series &amp; Chapters
                </h2>
              </div>
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>
          </motion.div>

          {/* Cards glide in from alternating sides */}
          <BentoGrid posts={filteredPosts} />
        </div>
      </section>

      {/* ── 4. Newsletter CTA ── */}
      <div className="border-t border-[var(--color-border)]/60">
        <NewsletterCTA />
      </div>
    </>
  );
}
