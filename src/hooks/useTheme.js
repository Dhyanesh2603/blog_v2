import { useState, useEffect, useCallback, useRef } from 'react';

export function useTheme() {
  const isFirstMount = useRef(true);

  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;

    if (!isFirstMount.current) {
      // Enable smooth cross-dissolve during user toggle
      root.classList.add('theme-transitioning');
      const timer = setTimeout(() => {
        root.classList.remove('theme-transitioning');
      }, 400);

      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);

      return () => {
        clearTimeout(timer);
        root.classList.remove('theme-transitioning');
      };
    } else {
      // Initial mount: instant theme application without transition flash
      isFirstMount.current = false;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      const stored = localStorage.getItem('theme');
      if (!stored) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggle = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle };
}

export default useTheme;
