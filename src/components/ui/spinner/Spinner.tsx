import { SpinnerIcon } from '@/assets/icons';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  color?: 'primary' | 'white' | 'error' | 'success' | 'warning';
}

const Spinner = ({ size = 'md', className = '', color = 'primary' }: SpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    primary: 'text-brand-600 dark:text-brand-400',
    white: 'text-white',
    error: 'text-error-600 dark:text-error-400',
    success: 'text-success-600 dark:text-success-400',
    warning: 'text-warning-600 dark:text-warning-400'
  };

  return (
    <SpinnerIcon className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className}`} />
  );
};

export default Spinner; 