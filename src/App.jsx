import React from 'react'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Product from './components/Product/Product';
import About from './components/About/About';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Hero/>
      <Features/>
      <Product/>
      <About/>
      <Service/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default App