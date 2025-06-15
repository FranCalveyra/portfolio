import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl text-white',
        secondary: 'bg-gradient-to-r from-blue-800 to-indigo-900 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl text-white',
        outline: 'border-2 border-blue-500 hover:bg-blue-500 hover:text-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button: React.FC<ButtonProps> = ({ className, variant, ...props }) => {
  return (
    <button className={buttonVariants({ variant, className })} {...props} />
  );
};

export default Button; 