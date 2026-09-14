import { useState, useCallback, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from '../ui/ScrollProgress';
import SearchDialog from '../ui/SearchDialog';
import { useKeyboardShortcut } from '../../hooks/useKeyboardShortcut';

export default function Layout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Smooth inertia scrolling via Lenis (tuned 1.2x faster per user request)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15, // Tuned for snappier, faster response
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.80, // 1.2x faster scroll speed per wheel notch
      touchMultiplier: 1.35,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      if (window.__lenis === lenis) {
        window.__lenis = null;
      }
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleToggleSearch = useCallback(() => {
    setIsSearchOpen(prev => !prev);
  }, []);

  useKeyboardShortcut('k', handleToggleSearch, { metaKey: true });

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-canvas)] text-[var(--color-primary)] selection:bg-[var(--color-accent)] selection:text-white">
      <ScrollProgress />
      
      <Navbar onSearchOpen={() => setIsSearchOpen(true)} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 pt-24"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
      
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
