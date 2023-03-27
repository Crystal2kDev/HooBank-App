import React from 'react'
import './Features.scss';
import Star from '../../assets/Star.svg';
import Shield from '../../assets/Shield.svg';
import Send from '../../assets/Send.svg';


const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container features__container">
        <div className="features__content">
          <h2 className="features__title block-title">
            You do the business, <br/>we'll handle the money.
          </h2>
          <p className="features__description block-description">
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
          </p>
          <button className="features__button get-started">Get Started</button>
        </div>
        <ul className="features__list">
          <li className="features__item">
            <div className="features__item__img">
              <img src={Star} alt="Star"/>
            </div>
            <div className="features__item__content">
              <h3 className="features__item__title">
                Rewards
              </h3>
              <p className="features__item__description">
                The best credit cards offer some tantalizing combinations of promotions and prizes
              </p>
            </div>
          </li>

          <li className="features__item">
            <div className="features__item__img">
              <img src={Shield} alt="Shield"/>
            </div>
            <div className="features__item__content">
              <h3 className="features__item__title">
                100% Secured
              </h3>
              <p className="features__item__description">
                We take proactive steps make sure your information and transactions are secure.
              </p>
            </div>
          </li>

          <li className="features__item">
          <div className="features__item__img">
              <img src={Send} alt="Send"/>
          </div>
          <div className="features__item__content">
            <h3 className="features__item__title">
              Balance Transfer
            </h3>
            <p className="features__item__description">
              A balance transfer credit card can save you a lot of money in interest charges.
            </p>
          </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Features