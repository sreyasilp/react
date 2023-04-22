import React from 'react';

import { Footer } from './footer';
import { HeroBanner } from './heroBanner';
import { Main } from './Main';
import { NavHeader } from './navHeader';
import { StickyHeader } from './stickyHeader';

export const Home = () => {
  return (
    <>
      <NavHeader />
      <StickyHeader />
      <HeroBanner />
      <Main />
      <Footer />
    </>
  );
};
