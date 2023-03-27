import React from 'react'
import './Footer.scss';
import Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__col">
            <a href="/#" className="footer__logo">
              <img src={Logo} alt="Logo"/>
            </a>
            <p className="footer__description">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          

          <div className="footer__col">
            <h3 className="footer__title">Usefull Links</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/#" className="footer__link">Content</a>
              </li>
              <li className="footer__item">
                <a href="/#" className="footer__link">How it Works</a>
              </li>
              <li className="footer__item">
                <a href="/#" className="footer__link">Create</a>
              </li>
              <li className="footer__item">
                <a href="/#" className="footer__link">Explore</a>
              </li>
              <li className="footer__item">
                <a href="/#" className="footer__link">Terms & Services</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Community</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/#" className="footer__link">Help Center</a>
              </li>
              <li className="footer__item">
                <a href="/#" className="footer__link">Partners</a>
              </li>
              <li className="footer__item">
                <a href="/#" className="footer__link">Suggestions</a>
              </li>
              <li className="footer__item">
                <a href="/#" className="footer__link">Blog</a>
              </li>
              <li className="footer__item">
                <a href="/#" className="footer__link">Newsletters</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Partner</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/#" className="footer__link">Our Partner</a>
              </li>
              <li className="footer__item">
                <a href="/#" className="footer__link">Become a Partner</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer