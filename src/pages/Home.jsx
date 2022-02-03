import React from 'react';
import Header from '../components/Header';
import ScrollCategories from '../components/ScrollCategories';
import ScrollPopular from '../components/ScrollPopular';

function Home() {
  return (
    <>
      <Header />
      <ScrollPopular />
      <ScrollCategories />
    </>
  );
}

export default Home;
