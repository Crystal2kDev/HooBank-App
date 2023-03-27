import React from 'react'
import './Hero.scss';
import Discount from '../../assets/Discount.svg';
import Robot from '../../assets/robot.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__wrapper">
        <div className="hero__text">
          <div className="hero__discount">
            <img src={Discount} alt="Discount"/>
            <p><span>20%</span> discount for <span>1 month</span> account</p>
          </div>
          <h1 className="hero__title">The Next <span className="text-gradient">Generation</span> Payment Method</h1>
          <p className="hero__description block-description">
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.<br/>We examine annual percentage rates, annual fees.
          </p>
        </div>
        <div className="hero__img">
          <img src={Robot} alt="RobotHand"/>
          <div className="pink__gradient"></div>
          <div className="white__gradient"></div>
          <div className="blue__gradient"></div>
        </div>
      </div>
      
      <ul className="hero__list">
        <li className="hero__item">
          <h3 className="hero__item__title">3800+</h3>
          <p className="hero__item__description text-gradient">User Active</p>
        </li>
        <li className="hero__item">
          <h3 className="hero__item__title">230+</h3>
          <p className="hero__item__description text-gradient">Trusted by Company</p>
        </li>
        <li className="hero__item">
          <h3 className="hero__item__title">$230M+</h3>
          <p className="hero__item__description text-gradient">Transaction</p>
        </li>
      </ul>
    </section>
  )
}

export default Hero