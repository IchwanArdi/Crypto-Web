// import { useState } from 'react'

import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Utilities from './components/Utilities';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <Utilities />
      <Footer />
    </>
  );
}

export default App;
