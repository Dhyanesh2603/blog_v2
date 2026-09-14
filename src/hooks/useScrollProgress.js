import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function computeProgress() {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        return Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      }
      return 0;
    }

    function onScrollNative() {
      setProgress(computeProgress());
    }

    // Connect to Lenis if available for instantaneous per-frame progress updates
    let lenisUnsubscribe = null;
    if (window.__lenis && typeof window.__lenis.on === 'function') {
      lenisUnsubscribe = window.__lenis.on('scroll', (e) => {
        if (typeof e?.progress === 'number') {
          setProgress(Math.min(100, Math.max(0, e.progress * 100)));
        } else {
          setProgress(computeProgress());
        }
      });
    }

    window.addEventListener('scroll', onScrollNative, { passive: true });
    setProgress(computeProgress());

    return () => {
      window.removeEventListener('scroll', onScrollNative);
      if (typeof lenisUnsubscribe === 'function') {
        lenisUnsubscribe();
      }
    };
  }, []);

  return progress;
}

export default useScrollProgress;
