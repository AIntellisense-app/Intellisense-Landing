// App.js
import React, { useRef } from 'react';
import './App.scss';
import Card from './components/card/Card';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import Footer from './components/footer/Footer';
import HeroSection from './components/HeroSection';
import Header from './components/header/Header';

const App = () => {
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    about: aboutRef,
    features: featuresRef,
    services: servicesRef,
    contact: contactRef,
  };

  return (
    <>
      <Header refs={refs} />
      <HeroSection ref={aboutRef} />
      <Card ref={servicesRef} />
      <ScrollToTopButton /> 
      <Footer />
    </>
  );
};

export default App;
