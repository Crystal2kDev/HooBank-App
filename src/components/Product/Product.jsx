import React from 'react'
import './Product.scss';
import Card from '../../assets/card.png';


const Application = () => {
  return (
    <section className="product" id="product">
      <div className="container product__container">
        <div className="product__text">
          <h2 className="product__title block-title">
            Find a better card deal in a few steps
          </h2>
          <p className="product__description block-description">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button className="product__btn get-started">Get Started</button>
        </div>
        <div className="product__img">
          <img src={Card} alt="Card"/>
        </div>
      </div>
    </section>
  )
}

export default Application