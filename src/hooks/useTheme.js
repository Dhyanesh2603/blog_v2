import { useState, useEffect, useCallback, useRef } from 'react';

export function useTheme() {
  const isFirstMount = useRef(true);

  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    return stored === 'dark' ? 'dark' : 'light';
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

  // System preference listener only applies if user has not stored a preference
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (!stored) {
      // Ensure initial default is strictly light
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggle = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle };
}

export default useTheme;
