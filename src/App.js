// App.js
import React, { useRef } from 'react';
import './App.scss';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Card from './components/Card';
import ScrollToTopButton from './components/ui/ScrollToTopButton'; 

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
    </>
  );
};

export default App;
