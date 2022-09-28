import React from 'react';
import './SearchInput.scss';
import {BsSearch} from 'react-icons/bs'
const SearchInput = ({ value, setValue, placeholder }) => {
  return (
    <div className='search-input-wrapper'>
      <BsSearch className='search-icon' />
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        className="search-input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
