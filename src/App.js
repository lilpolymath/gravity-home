import React from 'react';

import Hero from '../src/components/Hero';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Testimonial from './components/Testimonial';
import Clients from './components/Clients';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Works />
      <Testimonial />
      <Clients />
    </>
  );
}

export default App;
