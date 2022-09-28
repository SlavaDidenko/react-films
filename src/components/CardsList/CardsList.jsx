import React from 'react';
import Card from './Card/Card';
const CardsList = ({ cards }) => {
  return (
    <div>
      <ul className="cards">
        {cards.map((card, index) => {
          return <Card key={index} props={card} />
        })}
      </ul>
    </div>
  );
};

export default CardsList;
