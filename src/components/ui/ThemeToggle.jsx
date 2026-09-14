import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import useTheme from '../../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggle}
      type="button"
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-elevated)] text-[var(--color-secondary)] transition-all duration-300 hover:text-[var(--color-primary)] hover:border-[var(--color-border-hover)] hover:scale-105 active:scale-95 focus:outline-none cursor-pointer overflow-hidden shadow-xs"
      aria-label="Toggle theme"
    >
      {/* Sun Icon (Light Mode) */}
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
          rotate: isDark ? 90 : 0,
        }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center text-amber-500"
      >
        <Sun size={17} strokeWidth={2.2} />
      </motion.div>

      {/* Moon Icon (Dark Mode) */}
      <motion.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90,
        }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center text-indigo-400"
      >
        <Moon size={17} strokeWidth={2.2} />
      </motion.div>
    </button>
  );
}
