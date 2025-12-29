import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  loading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-light tracking-wide transition-all duration-500 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed relative overflow-hidden group';

  const variantClasses = {
    primary: 'bg-blue-900 text-white hover:bg-blue-800 focus:ring-1 focus:ring-blue-900 focus:ring-offset-2',
    secondary: 'bg-white text-blue-900 border border-gray-200 hover:border-blue-900 focus:ring-1 focus:ring-blue-900 focus:ring-offset-2',
    outline: 'border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white focus:ring-1 focus:ring-blue-900 focus:ring-offset-2',
    ghost: 'text-blue-900 hover:bg-gray-50 focus:ring-1 focus:ring-gray-200 focus:ring-offset-2',
    text: 'text-blue-900 hover:opacity-70 focus:ring-1 focus:ring-gray-200 focus:ring-offset-2',
  };

  const sizeClasses = {
    sm: 'text-sm px-5 py-2.5 gap-2',
    md: 'text-base px-8 py-3.5 gap-2.5',
    lg: 'text-lg px-10 py-4 gap-3',
    xl: 'text-xl px-12 py-5 gap-3',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <span className="relative flex items-center justify-center gap-2">
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && icon && iconPosition === 'left' && (
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {!loading && icon && iconPosition === 'right' && (
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </span>
    </button>
  );
};

export default Button;
