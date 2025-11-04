import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
      {/* Subtle hover gradient */}
      <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Content */}
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


// Demo Component
function ButtonShowcase() {
  const [loading, setLoading] = React.useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-light text-blue-900 mb-4">
            Button Components
          </h1>
          <p className="text-gray-600 font-light text-lg">
            Refined interactions with subtle elegance
          </p>
        </div>

        {/* Primary Buttons */}
        <section className="bg-white border border-gray-100 p-12 mb-px">
          <h2 className="text-2xl font-light text-blue-900 mb-8">Primary Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">
              Small Button
            </Button>
            <Button variant="primary" size="md">
              Medium Button
            </Button>
            <Button variant="primary" size="lg">
              Large Button
            </Button>
            <Button variant="primary" size="xl">
              Extra Large
            </Button>
          </div>
        </section>

        {/* Variants */}
        <section className="bg-white border border-gray-100 p-12 mb-px">
          <h2 className="text-2xl font-light text-blue-900 mb-8">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">
              Primary
            </Button>
            <Button variant="secondary">
              Secondary
            </Button>
            <Button variant="outline">
              Outline
            </Button>
            <Button variant="ghost">
              Ghost
            </Button>
            <Button variant="text">
              Text
            </Button>
          </div>
        </section>

        {/* With Icons */}
        <section className="bg-white border border-gray-100 p-12 mb-px">
          <h2 className="text-2xl font-light text-blue-900 mb-8">Buttons with Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              }
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              }
              iconPosition="left"
            >
              Download
            </Button>
            <Button 
              variant="secondary" 
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              iconPosition="left"
            >
              Contact Us
            </Button>
          </div>
        </section>

        {/* States */}
        <section className="bg-white border border-gray-100 p-12 mb-px">
          <h2 className="text-2xl font-light text-blue-900 mb-8">Button States</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={handleLoadingDemo} loading={loading}>
              {loading ? 'Processing...' : 'Click to Load'}
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
          </div>
        </section>

        {/* Full Width */}
        <section className="bg-white border border-gray-100 p-12">
          <h2 className="text-2xl font-light text-blue-900 mb-8">Full Width Buttons</h2>
          <div className="space-y-4 max-w-md">
            <Button variant="primary" fullWidth>
              Full Width Primary
            </Button>
            <Button variant="outline" fullWidth>
              Full Width Outline
            </Button>
          </div>
        </section>

        {/* CTA Example */}
        <section className="bg-blue-900 p-16 mt-px">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-gray-300 font-light mb-10 leading-relaxed text-lg">
              Join thousands of satisfied customers who trust our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                }
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="!border-white !text-white hover:!bg-white hover:!text-blue-900"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Button;
export { ButtonShowcase };