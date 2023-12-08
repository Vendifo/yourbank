// Home.js
import React from 'react';
import Header from '../components/home/header/Header';
import Empowering from '../components/home/empowering/Empowering'
import Products from '../components/home/products/Products';
import Cases from '../components/home/cases/Cases'
import Features from '../components/home/features/Features';
import Questions from '../components/home/questions/Questions';


function Home() {
  return (
    <div>
      <Header />
      <Empowering />
      <Products />
      <Cases/>
      <Features/>
      <Questions/>
    </div>
  );
}

export default Home;