'use client'

import React from 'react';

interface ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  onClick?: () => void;
  children: React.ReactNode;
  ignoreStyle?: boolean
}


export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ 
  backgroundColor,
  textColor,
  onClick, 
  ignoreStyle,
  style,
  className,
  type,
  children
  
}) => {
  return (
    <button
      className={`
          ${backgroundColor ? backgroundColor : 'bg-'} 
          text-${textColor ? textColor : 'white'}
          rounded-lg
          px-4
          text-center
          py-2
          border-0
          w-fit
          h-[40px]
          gap-2.5
          flex
          self-stretch
          items-center
          justify-center
          font-bold
          uppercase
          whitespace-nowrap
          ${className}
   
        `}
        style={style}
        type={type}

      

      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
