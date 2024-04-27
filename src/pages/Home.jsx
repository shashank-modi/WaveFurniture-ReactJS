import React from 'react';
import Navbar from '../components/Navbar';
import Home1 from '../components/Home1';
import Home2 from '../components/Home2';
import Services from '../components/Services';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home(){
  return (
    <>
      <Navbar />
      <Home1 />
      <Home2 />
      <Services />
      <About />
      <Footer />
    </>
  );
};
