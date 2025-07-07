import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'text';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  loadingVariant?: 'spin' | 'pulse' | 'dots';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  rounded?: 'full' | 'lg' | 'md' | 'sm' | 'none';
  animateOnHover?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  loadingVariant = 'spin',
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  fullWidth = false,
  rounded = 'full',
  animateOnHover = true
}) => {
  // Base classes that apply to all buttons
  const baseClasses = 'inline-flex items-center justify-center font-karla font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-dusty-rose/50 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Rounded corner classes
  const roundedClasses = {
    full: 'rounded-full',
    lg: 'rounded-lg',
    md: 'rounded-md',
    sm: 'rounded-sm',
    none: 'rounded-none'
  };

  // Hover animation classes
  const hoverAnimationClasses = animateOnHover ? 'transform hover:scale-105 active:scale-95' : '';

  // Variant specific styling
  const variantClasses = {
    primary: 'bg-dusty-rose text-cream hover:bg-dusty-rose/90 shadow-gentle hover:shadow-soft',
    secondary: 'bg-mocha text-cream hover:bg-mocha/90 shadow-gentle hover:shadow-soft',
    outline: 'border-2 border-dusty-rose text-dusty-rose hover:bg-dusty-rose/10',
    ghost: 'text-dusty-rose hover:bg-dusty-rose/10',
    gradient: 'bg-gradient-to-r from-dusty-rose to-sage text-cream hover:from-sage hover:to-dusty-rose shadow-gentle hover:shadow-soft',
    text: 'text-dusty-rose hover:underline hover:underline-offset-4 decoration-dusty-rose/30'
  };

  // Size specific padding and text size
  const sizeClasses = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  // Icon size based on button size
  const iconSizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  };

  // Map button size to loading spinner size
  const spinnerSizeMap = {
    xs: 'small',
    sm: 'small',
    md: 'small',
    lg: 'medium',
    xl: 'medium'
  } as const;

  // Map button variant to loading spinner color
  const spinnerColorMap = {
    primary: 'cream',
    secondary: 'cream',
    outline: 'dusty-rose',
    ghost: 'dusty-rose',
    gradient: 'cream',
    text: 'dusty-rose'
  } as const;

  // Button hover animation variants
  const buttonVariants = {
    hover: {
      scale: animateOnHover ? 1.05 : 1,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: animateOnHover ? 0.95 : 1,
      transition: { duration: 0.1 }
    }
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${roundedClasses[rounded]}
        ${widthClasses}
        ${!animateOnHover ? hoverAnimationClasses : ''}
        ${className}
      `}
      whileHover={animateOnHover ? "hover" : undefined}
      whileTap={animateOnHover ? "tap" : undefined}
      variants={buttonVariants}
    >
      {loading ? (
        <LoadingSpinner 
          size={spinnerSizeMap[size]} 
          variant={loadingVariant}
          color={spinnerColorMap[variant]}
          className="mr-2" 
        />
      ) : (
        Icon && iconPosition === 'left' && (
          <Icon className={`${iconSizeClasses[size]} mr-2`} />
        )
      )}
      
      <span className={loading ? 'opacity-90' : ''}>{children}</span>
      
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className={`${iconSizeClasses[size]} ml-2`} />
      )}
    </motion.button>
  );
};

export default Button;
