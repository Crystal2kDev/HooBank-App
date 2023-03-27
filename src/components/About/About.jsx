import React from 'react'
import './About.scss';
import Quotes from '../../assets/quotes.svg';
import FirstPerson from '../../assets/people01.png';
import SecondPerson from '../../assets/people02.png';
import ThirdPerson from '../../assets/people03.png';
import Airbnb from '../../assets/airbnb.png';
import Binance from '../../assets/binance.png';
import Coinbase from '../../assets/coinbase.png';
import Dropbox from '../../assets/dropbox.png';

const About = () => {
  return (
    <section className="about" id="clients">
      <div className="container">
        <div className="about__header">
          <h2 className="about__title block-title">
            What people are saying about us
          </h2>
          <p className="about__description block-description">
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
        
        <ul className="about__list">
          <li className="about__item">
            <img src={Quotes} alt="Quotes"/>
            <p className="about__item__description">
              Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
            </p>
            <div className="about__item__person">
              <div className="about__item__person__img">
                <img src={FirstPerson} alt="First__Person"/>
              </div>
              <div className="about__item__content">
                <h4 className="about__item__person__title">
                  Herman Jensen
                </h4>
                <p className="about__item__person__description">
                  Founder & Leader
                </p>
              </div>
            </div>
          </li>

          <li className="about__item">
            <img src={Quotes} alt="Quotes"/>
            <p className="about__item__description">
              Money makes your life easier. If you're lucky to have it, you're lucky.
            </p>
            <div className="about__item__person">
              <div className="about__item__person__img">
                <img src={SecondPerson} alt="SecondPerson"/>
              </div>
              <div className="about__item__content">
                <h4 className="about__item__person__title">
                  Steve Mark
                </h4>
                <p className="about__item__person__description">
                  Founder & Leader
                </p>
              </div>
            </div>
          </li>

          <li className="about__item">
            <img src={Quotes} alt="Quotes"/>
            <p className="about__item__description">
              It is usually people in the money business, finance, and international trade that are really rich.
            </p>
            <div className="about__item__person">
              <div className="about__item__person__img">
                <img src={ThirdPerson} alt="ThirdPerson"/>
              </div>
              <div className="about__item__person__content">
                <h4 className="about__item__person__title">
                  Kenn Gallagher
                </h4>
                <p className="about__item__person__description">
                  Founder & Leader
                </p>
              </div>
            </div>
          </li>
          <div className="blue__gradient"></div>
        </ul>

        <div className="about__footer">
          <ul className="about__footer__list">
            <li className="about__footer__item">
              <img src={Airbnb} alt="Airbnb Logo"/>
            </li>
            <li className="about__footer__item">
              <img src={Binance} alt="Binance Logo"/>
            </li>
            <li className="about__footer__item">
              <img src={Coinbase} alt="Coinbase Logo"/>
            </li>
            <li className="about__footer__item">
              <img src={Dropbox} alt="Dropbox Logo"/>
            </li>
          </ul>
        </div>
      </div>
      
    </section>
  )
}

export default About