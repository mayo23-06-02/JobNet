import React from 'react';

const Input = ({ label, type = 'text', value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col space-y-2 text-sm lg:text-base">
      {label && <label className=' text-gray-400 px-2'>{label}</label>}
      <input
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={label}
        className='border border-black/10 placeholder:text-black  lg:rounded-xl rounded-full h-10 text-sm lg:h-14 py-2 px-4'
      />
    </div>
  );
};

export default Input;
