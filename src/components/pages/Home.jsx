import GetFilms from 'components/API/getFIlms';
import CardsList from 'components/CardsList/CardsList';
import NumberCards from 'components/NumberCards/NumberCards';
import Title from 'components/title/Title';
import SearchInput from 'components/UI/SearchInput/SearchInput';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import '../styles/home.scss';

const Home = () => {
  const [films, setFilms] = useState('');
  const [filter, setFilter] = useState('');
  const [skeleton, setSkeleton] = useState(false);

  useEffect(() => {
    const getFilms = async () => {
      setSkeleton(true);
      const { data } = await GetFilms.allFilms("6");
      setFilms(data);
      setSkeleton(false);
    };
    getFilms();
  }, []);

  const filterCards = filter => {
    if (films.length) {
      return films.filter(el =>
        el['name_russian'].toLowerCase().includes(filter.toLowerCase())
      );
    }
    return [];
  };

  const dataFilms = filterCards(filter);
  return (
    <main className="main home">
      <div className="container">
        <Title
          title={'Slava Didenko'}
          subtitle={
            'Have a nice day 😉'
          }
        />
        <div className="home__input-wrapper">
          <SearchInput
            value={filter}
            setValue={setFilter}
            placeholder={'Search Movies or TV Shows'}
          />
        </div>
        <NumberCards title={'All'} number={`(${dataFilms.length})`} />
        {/* <CardsList cards={dataFilms} /> */}
        {skeleton ? (
          <CardsList cards={[1, 2, 3, 4, 5, 6, 7, 8]} />
        ) : dataFilms.length ? (
          <CardsList cards={dataFilms} />
        ) : (
          <p>None</p>
        )}

        {/* {dataFilms.length ? (
          <CardsList cards={dataFilms} />
        ) : (
          <CardsList cards={[1, 2, 3, 4, 5, 6, 7, 8]} />
        )} */}
      </div>
    </main>
  );
};

export default Home;
