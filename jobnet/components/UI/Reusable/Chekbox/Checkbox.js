import React from 'react';

// Reusable Checkbox Component
const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
