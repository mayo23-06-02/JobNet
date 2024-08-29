import React from 'react';

// Reusable Button Component
const Button = ({ label, onClick, type = 'button', className }) => {
  return (
    <button type={type} onClick={onClick} className={'bg-black w-full py-4 text-white rounded-xl font-bold '}>
      {label}
    </button>
  );
};

export default Button;