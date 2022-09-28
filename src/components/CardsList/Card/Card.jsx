import React from 'react';
import './Card.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'components/UI/skeleton/Skeleton';
import { Link } from 'react-router-dom';
import Rating from 'components/UI/Rating';

const Card = ({ props }) => {
  const {
    id,
    small_poster: poster,
    name_russian: name,
    rating_imdb: rating,
  } = props;

  if (!poster) return (
    <>
      <Skeleton />
    </>
  )
  return (
    <li className="cards__item card">
        <Link to={`/films/${id}`} className="card__wrapper-img">
          <img src={poster} alt={'df'} />
        </Link>
        <Link to={`/films/${id}`}>
          <h3 className="card__title">{name}</h3>
        </Link>
          <Rating rating={rating}/>
      </li>
  );
};

export default Card;
