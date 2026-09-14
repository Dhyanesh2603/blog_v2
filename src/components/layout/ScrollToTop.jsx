import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  const resetScroll = () => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        if (window.__lenis) {
          window.__lenis.scrollTo(element, { immediate: true, force: true });
        } else {
          element.scrollIntoView({ behavior: 'auto' });
        }
        return;
      }
    }

    // Reset Lenis smooth scroll engine
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true, force: true });
    }

    // Reset native window & document scroll positions
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  // Immediate synchronous reset before paint
  useLayoutEffect(() => {
    resetScroll();
  }, [pathname, search, hash]);

  // Secondary checks to account for dynamic DOM layout & image rendering
  useEffect(() => {
    resetScroll();
    const rafId = requestAnimationFrame(resetScroll);
    const t1 = setTimeout(resetScroll, 40);
    const t2 = setTimeout(resetScroll, 120);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname, search, hash]);

  return null;
}
