import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-(--primary) text-white hover:bg-(--primary)/90 hover:shadow-md',
    secondary: 'bg-(--card) border border-(--border) text-(--text) hover:border-(--primary) hover:text-(--primary)',
    success: 'bg-(--accent) text-white hover:bg-(--accent)/90 hover:shadow-md',
    warning: 'bg-amber-500 text-white hover:bg-amber-600 hover:shadow-md',
    danger: 'bg-red-600 text-white hover:bg-red-700 hover:shadow-md',
    outline: 'border border-(--primary) text-(--primary) hover:bg-(--primary) hover:text-white',
    ghost: 'text-(--primary) hover:bg-(--primary)/10'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
    xl: 'px-10 py-5 text-xl gap-3'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <>
          <span className="inline-block h-4 w-4 rounded-full border-2 border-white/70 border-t-transparent animate-spin"></span>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span>{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span>{icon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
