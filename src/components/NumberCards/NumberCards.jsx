import React from 'react';
import './NumberCards.scss'
const NumberCards = ({title, number}) => {
  return (
    <div className="number-cards">
      <h2 className='number-cards__title'>{title}</h2>
      <span className="number-cards__number">{number}</span>
    </div>
  );
};

export default NumberCards;
