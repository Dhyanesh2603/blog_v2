import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterCTA() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-10 md:py-14">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl bg-[var(--color-elevated)] border border-[var(--color-border)] p-8 sm:p-10 md:p-12 flex flex-col items-center text-center"
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--color-accent-soft)_0%,_transparent_70%)] opacity-30" />
        
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-heading-1 text-[var(--color-primary)] mb-3">
            Stay in the loop
          </h2>
          <p className="text-body text-[var(--color-secondary)] mb-6 max-w-lg mx-auto">
            Get early access to our latest editorial pieces, design insights, and exclusive content directly in your inbox.
          </p>
          
          <form 
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="flex-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full py-3.5 px-6 text-[var(--color-primary)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            />
            <button 
              type="submit"
              className="flex items-center justify-center gap-2 bg-[var(--color-primary)] text-[var(--color-canvas)] px-8 py-3.5 rounded-full font-medium hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
            >
              Subscribe <ArrowRight size={18} />
            </button>
          </form>
          
          <p className="text-caption text-[var(--color-muted)] mt-6">
            We care about your data. Unsubscribe at any time.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
