import React from 'react'
import { useState } from 'react';
import Logo from '../../assets/logo.svg';
import Menu from '../../assets/menu.svg';
import MenuClose from '../../assets/close.svg';
import './Header.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="header">
      <div className="header__container container">
        <a href="/" className="logo">
          <img src={Logo} alt="Logo" />
        </a>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#home" className="navbar__link">Home</a>
            </li>
            <li className="navbar__item">
              <a href="#features" className="navbar__link">Features</a>
            </li>
            <li className="navbar__item">
              <a href="#product" className="navbar__link">Product</a>
            </li>
            <li className="navbar__item">
              <a href="#clients" className="navbar__link">Clients</a>
            </li>
          </ul>
        </nav>

        <button 
        className='menu'
        onClick={() => setToggle((prev) => (!prev))}
        > 
          <span className={`${toggle ? 'menu__line__active' : 'menu__line'}`}></span>
          <span className={`${toggle ? 'menu__line__active' : 'menu__line'}`}></span>
          <span className={`${toggle ? 'menu__line__active' : 'menu__line'}`}></span>
          
          <div className={`menu__content ${toggle ? 'show' : 'hidden'}`}>
            <nav className="navbar">
              <ul className="navbar__list">
                <li className="navbar__item">
                  <a href="#home" className="navbar__link">Home</a>
                </li>
                <li className="navbar__item">
                  <a href="#features" className="navbar__link">Features</a>
                </li>
                <li className="navbar__item">
                  <a href="#product" className="navbar__link">Product</a>
                </li>
                <li className="navbar__item">
                  <a href="#clients" className="navbar__link">Clients</a>
                </li>
              </ul>
            </nav>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Header