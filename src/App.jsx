

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Skills from './sections/Skills';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,  // animation duration
      once: true,     // only animate once
    });
  }, []);
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Skills />
      
    </div>
  );
}

export default App;
