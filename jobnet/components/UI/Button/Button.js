
"use client"
import React, { useState } from 'react';
import Loader from '../Reusable/Loader/Loader';

// Reusable Button Component
const Button = ({ label, onClick, type = 'button', className, showLoader = false }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (showLoader) {
      setIsLoading(true);
    }
    onClick();
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`bg-[#0E1230] w-full flex items-center justify-center lg:py-4 py-3 text-sm lg:text-base text-white lg:rounded-xl rounded-full font-bold ${className}`}
      disabled={isLoading}
    >
      {isLoading && showLoader ? <Loader /> : label}
    </button>
  );
};

export default Button;
