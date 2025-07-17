import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import TechStack from './sections/TechStack';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Certifications from './sections/Certifications';
import Clients from './sections/Clients';
import Testimonials from './sections/Testimonials';
import Experiences from './sections/Experiences';
import Education from './sections/Education';
// import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Skills />
      <Portfolio />
      <Certifications />
      <Clients />
      <Testimonials />
      <Experiences />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
