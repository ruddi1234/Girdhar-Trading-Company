'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GreenButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  icon?: ReactNode;
}

export default function GreenButton({
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  fullWidth = false,
  icon,
}: GreenButtonProps) {
  const baseClasses = 'px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-soft';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-primary-600/20',
    secondary: 'bg-white text-primary-700 border-2 border-primary-600 hover:bg-primary-50',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={!disabled ? { scale: 1.02, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
      {icon && icon}
    </motion.button>
  );
}

