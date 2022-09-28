import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import './Pagination.scss';

const Pagination = ({ arr, getNewFims }) => {
  const divBlock = useRef(null);
  const btn = useRef(null);
  const idicator = useRef(null);
  const [paramsIndicator, setParamsIndicator] = useState({
    height: '0',
    width: '0',
  });
  useEffect(() => {
    const { height, width } = divBlock.current.getBoundingClientRect();
    setParamsIndicator({
      "height": height + 'px',
      "width": width + 'px',
    });
  }, []);

  const getParams = (number) => {
    console.log(btn.current.childNodes[number - 1].getBoundingClientRect())
    const { height, width , x } = btn.current.childNodes[number - 1].getBoundingClientRect();
    const translate = x - btn.current.getBoundingClientRect().x;
    setParamsIndicator({
      "height": height + 'px',
      "width": width + 'px',
      "transform": `translateX(${translate}px)`,
    });
  }

  return (
    <div className="pagination">
        <div ref={idicator} style={paramsIndicator} className="active-idicator"></div>
      <ul ref={btn} className="pagination__list">
        <li className="pagination__item">
          <button
            ref={divBlock}
            className="pagination__btn"
            onClick={() => {
              getNewFims("1");
              getParams(1);
            }}
          >
            {1}
          </button>
        </li>
        {arr?.map(el => {
          return (
            <li key={el} className="pagination__item">
              <button
                className="pagination__btn"
                onClick={() => {
                  getParams(el);
                  getNewFims(el);
                }}
              >
                {el}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
