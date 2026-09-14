import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import ThemeToggle from '../ui/ThemeToggle';

export default function Navbar({ onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      // Smart hide on scroll down, show on scroll up or at top
      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 20) {
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center justify-between rounded-full border px-6 py-3 transition-all duration-350 ease-out w-[calc(100%-2rem)] max-w-4xl",
          visible 
            ? "translate-y-0 opacity-100 pointer-events-auto" 
            : "-translate-y-28 opacity-0 pointer-events-none",
          scrolled 
            ? "border-[var(--color-border)] bg-[var(--color-surface)]/85 shadow-lg backdrop-blur-xl" 
            : "border-transparent bg-[var(--color-surface)]/70 shadow-sm backdrop-blur-md"
        )}
      >
        <div className="flex items-center gap-8">
          <Link to="/" className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[var(--color-primary)] hover:opacity-80 transition-opacity whitespace-nowrap">
            Siddarth Santosh
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "transition-colors text-caption py-1",
                    isActive 
                      ? "text-[var(--color-primary)] font-semibold border-b-2 border-[var(--color-primary)]" 
                      : "text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={onSearchOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-secondary)] transition-colors hover:bg-[var(--color-elevated)] hover:text-[var(--color-primary)] cursor-pointer"
            aria-label="Search articles (Cmd+K)"
            title="Search (⌘K)"
          >
            <Search size={18} />
          </button>
          
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-secondary)] transition-colors hover:bg-[var(--color-elevated)] hover:text-[var(--color-primary)] md:hidden cursor-pointer"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex flex-col bg-[var(--color-canvas)]/98 backdrop-blur-2xl p-6"
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="font-serif text-2xl font-bold tracking-tight text-[var(--color-primary)]">
                Siddarth Santosh
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-secondary)] transition-colors hover:bg-[var(--color-elevated)] hover:text-[var(--color-primary)] cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="mt-20 flex flex-col items-center gap-8 text-center">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-3xl font-medium tracking-tight transition-colors",
                      isActive ? "text-[var(--color-primary)] font-bold" : "text-[var(--color-secondary)] hover:text-[var(--color-primary)]"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
