import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
const Rating = ({rating}) => {
  return (
    <span className="card__rating">
    <AiOutlineStar className="star-icon" />
    {rating}
  </span>
  );
};

export default Rating;
