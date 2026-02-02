import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
