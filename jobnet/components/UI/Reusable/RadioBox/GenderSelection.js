import React, { useState } from 'react';
import RadioButton from './RadioBox';

const GenderSelection = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <div>
      <h1>Reusable Radio Button Component</h1>
      <RadioButton
        label="Male"
        name="gender"
        value="male"
        checked={selectedGender === 'male'}
        onChange={handleGenderChange}
      />
      <RadioButton
        label="Female"
        name="gender"
        value="female"
        checked={selectedGender === 'female'}
        onChange={handleGenderChange}
      />
      <RadioButton
        label="Other"
        name="gender"
        value="other"
        checked={selectedGender === 'other'}
        onChange={handleGenderChange}
      />
    </div>
  );
};

export default GenderSelection;
