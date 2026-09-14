import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="mt-10 md:mt-14 border-t border-[var(--color-border)] bg-[var(--color-canvas)] py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <p className="text-caption text-[var(--color-muted)]">
          &copy; {new Date().getFullYear()} Siddarth Santosh · Field Notes
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          <Link to="/" className="text-caption text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
            Home
          </Link>
          <Link to="/blog" className="text-caption text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
            Blog
          </Link>
          <Link to="/about" className="text-caption text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-caption text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
