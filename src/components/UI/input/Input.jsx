import React from 'react';
import './Input.scss';
const Input = ({ value, setValue, placeholder, icon }) => {
  return (
    <div className='input-wrapper'>
      {/* <icon className='input-icon' /> */}
      {icon}
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        className="input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
