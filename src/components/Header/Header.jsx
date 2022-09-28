import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { BsArrowRight } from 'react-icons/bs'
import {MdOutlineExitToApp} from 'react-icons/md'
const Header = ({loginned , exit}) => {

  // console.log(localStorage.getItem('login'));
  // export const ThemeContext = React.createContext(setLoginned);
  console.log(loginned)
  return (
    <header className="header">
      <div className="container header__wrapper">
        <div className="header__logo">
          <Link to="/home">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M9.25621 15.7628L26.7802 4.768C30.097 2.6872 34.4002 5.0796 34.4002 9.0052V30.9948C34.4002 34.92 30.097 37.3128 26.7802 35.232L9.25621 24.2372C6.1366 22.2796 6.1366 17.7204 9.25621 15.7628Z"
                fill="#4BB7FD"
              />
              <path
                d="M30.7441 15.7628L13.2201 4.768C9.9033 2.6872 5.6001 5.0796 5.6001 9.0052V30.9948C5.6001 34.92 9.9033 37.3128 13.2201 35.232L30.7441 24.2372C33.8637 22.2796 33.8637 17.7204 30.7441 15.7628Z"
                fill="#7B6EF6"
              />
            </svg>
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <Link to={'/films'} className="header__link">
                Фильмы
              </Link>
            </li>
            <li className="header__item">
              {loginned ? (
                <button onClick={exit} className="header__link">
                  <MdOutlineExitToApp className='header__icon'/>Выйти
                </button>
              ) : (
                <Link to={'/login'} className="header__link">
                  Войти<BsArrowRight className='header__icon'/>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
