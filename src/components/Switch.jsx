import React, { useState } from 'react';


const Switch = ({ onToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked); // Pass the updated state to the parent component
  };

  return (
    <div className={`switch ${isChecked ? 'on' : 'off'}`} onClick={handleToggle}>
      <input type="checkbox" checked={isChecked} readOnly />
      <label>Veg Only</label>
    </div>
  );
};

export default Switch;