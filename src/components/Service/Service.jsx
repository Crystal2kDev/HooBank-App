import React from 'react'
import './Service.scss';

const Service = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="service__content">
          <div className="service__text">
            <h2 className="service__title block-title">
              Let's try our service now!
            </h2>
            <p className="service__description block-description">
              Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
          </div>
          <button className="service__button get-started">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Service