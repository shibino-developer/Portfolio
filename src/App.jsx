import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // Animation duration (ms)
      once: true,       // Only animate once when scrolling down
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Services />
    </>
  );
}

export default App;
