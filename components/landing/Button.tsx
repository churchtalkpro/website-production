// src/components/Button.tsx
'use client';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export default function Button({ variant, children, onClick, className = '' }: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-md font-semibold transition-all duration-300 text-lg';
  const variantClasses = {
    primary: 'bg-churchtalk-red text-white hover:bg-churchtalk-charcoal',
    secondary: 'border-2 border-churchtalk-charcoal text-churchtalk-charcoal hover:text-churchtalk-red hover:border-churchtalk-red'
  };

  // Add confetti burst animation on primary button click
  const handleClick = () => {
    if (variant === 'primary') {
      // Confetti animation would go here
    }
    onClick();
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}