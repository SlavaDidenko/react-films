import GetFilms from 'components/API/getFIlms';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const FilmId = () => {
  const id = window.location.pathname.split('/').at(-1);
  const [film, setFilm] = useState('');

  useEffect(() => {
    async function getFilm() {
      const data = await GetFilms.getFilm(id);
      console.log(data);
      setFilm(data);
    }
    getFilm();
  }, []);

  const {
    trailer,
    big_poster: poster,
    slogan,
    description,
    premiere_world: release,
    time_minutes: time,
    genres,
    name_russian: name,
    rating_imdb: rating,
  } = film;

  let genresArr = [];
  genres?.forEach(element => {
    genresArr.push(element['name_ru']);
  });
  const filmArr = [
    ['Дата релиза:', release],
    ['Длительность', `${time} min`],
    ['Жанры', genresArr.join(', ')],
  ];
  return (
    <main className="main">
      <div className="container">
        <div className="player-wrapper">
          <iframe
            className="player"
            src={trailer}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <section className="film">
          <div className="wrapper-name">
            <div className="breadcrumbs">
              <Link className="breadcrumbs__link" to={'/home'}>
                Главная
              </Link>
              <span className='slash'>/</span>
              <Link className="breadcrumbs__link" to={'/films'}>
                Фильмы
              </Link>
            </div>
            <h1 className="film-name">{name}</h1>
          </div>
          <div className="film__main-wrapper">
            <div className="film__wrapper-img">
              <img src={poster}></img>
            </div>
            <div className="film__info">
              <h2 className="film__slogan">{slogan}</h2>
              <p className="film__description">{description}</p>
              <span className="film__rating">
                <AiOutlineStar className="star-icon" />
                {rating}
              </span>
              <ul className="film__info-list">
                {filmArr.map((el, index) => {
                  return (
                    <li key={index} className="film__info-item">
                      <h3 className="film__info-title">{el[0]}</h3>
                      <p className="film__info-text">{el[1]}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FilmId;
