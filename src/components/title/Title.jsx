import React from 'react';
import './Title.scss'
const Title = ({title , subtitle}) => {
  return (
    <div className='title-wrapper'>
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
};

export default Title;
