import React from 'react'
import './Copyright.scss';
import Instagram from '../../assets/instagram.svg';
import Facebook from '../../assets/facebook.svg';
import Twitter from '../../assets/twitter.svg';
import LinkedIn from '../../assets/linkedin.svg';

const Copyright = () => {
  return (
    <div className="copyright">
      <div className="container">
        <div className="copyright__content">
          <div className="copyright__col">
            <h4 className="copyright__title">
              Copyright 2021 HooBank. All Rights Reserved.
            </h4>
          </div>
          <div className="copyright__col">
            <ul className="copyright__list">
              <li className="copyright__item">
                <a href="#" className="copyright__link">
                  <img src={Instagram} alt="Instagram Logo"/>
                </a>
              </li>
              <li className="copyright__item">
                <a href="#" className="copyright__link">
                  <img src={Facebook} alt="Facebook Logo"/>
                </a>
              </li>
              <li className="copyright__item">
                <a href="#" className="copyright__link">
                  <img src={Twitter} alt="Twitter Logo"/>
                </a>
              </li>
              <li className="copyright__item">
                <a href="#" className="copyright__link">
                  <img src={LinkedIn} alt="LinkedIn Logo"/>
                </a>  
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Copyright