import { Link } from 'react-router';
import { cn } from '../../lib/utils';
import { forwardRef } from 'react';

const Button = forwardRef(({ 
  variant = 'primary', 
  size = 'md', 
  href, 
  className, 
  children, 
  ...rest 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out hover:-translate-y-[1px]';
  
  const variants = {
    primary: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] hover:shadow-md',
    secondary: 'border border-[var(--color-border)] bg-transparent text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
    ghost: 'bg-transparent text-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link to={href} className={classes} ref={ref} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} ref={ref} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
