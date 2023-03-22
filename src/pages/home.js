import React from 'react';

import { Footer } from './footer';
import { HeroBanner } from './heroBanner';
import { Main } from './Main';
import { NavHeader } from './navHeader';

export const Home = () => {
  return (
    <>
      <NavHeader />
      <HeroBanner />
      <Main />
      <Footer />
    </>
  );
};
