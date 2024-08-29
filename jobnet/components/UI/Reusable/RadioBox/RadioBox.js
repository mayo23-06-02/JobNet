import React from 'react';

// Reusable Radio Button Component
const RadioButton = ({ label, name, value, checked, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        required
      />
      <label>{label}</label>
    </div>
  );
};

export default RadioButton;
