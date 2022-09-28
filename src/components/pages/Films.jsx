import GetFilms from 'components/API/getFIlms';
import CardsList from 'components/CardsList/CardsList';
import NumberCards from 'components/NumberCards/NumberCards';

import Pagination from 'components/UI/pagination/Pagination';
import SearchInput from 'components/UI/SearchInput/SearchInput';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const arrPages = [2, 3, 4, 5];
const Films = () => {
  const [films, setFilms] = useState('');
  const [filter, setFilter] = useState('');
  const [skeleton, setSkeleton] = useState(false);
  const [currentId, setCurrentId] = useState('');

  useEffect(() => {
    getNewFims('1');
  }, []);

  const filterCards = filter => {
    if (films.length) {
      return films.filter(el =>
        el['name_russian'].toLowerCase().includes(filter.toLowerCase())
      );
    }
    return [];
  };

  const getNewFims = async id => {
    if (currentId !== id) {
      setSkeleton(true);
      const { data } = await GetFilms.allFilms(id);
      setFilms(data);
      setSkeleton(false);
      setCurrentId(id);
    }
  };

  const dataFilms = filterCards(filter);
  return (
    <main className="main home">
      <div className="container">
        <div className="home__input-wrapper">
          <SearchInput
            value={filter}
            setValue={setFilter}
            placeholder={'Search Movies or TV Shows'}
          />
        </div>
        <Pagination arr={arrPages} getNewFims={getNewFims} />
        <NumberCards title={'All'} number={`(${dataFilms.length})`} />
        {/* <CardsList cards={dataFilms} /> */}
        {skeleton ? (
          <CardsList cards={[1, 2, 3, 4, 5, 6, 7, 8]} />
        ) : dataFilms.length ? (
          <CardsList cards={dataFilms} />
        ) : (
          <p>None</p>
        )}
      </div>
    </main>
  );
};

export default Films;
