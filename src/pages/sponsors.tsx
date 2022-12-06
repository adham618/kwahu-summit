import React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import PageShape from '@/components/page-shape/PageShape';
import SponsorsSection from '@/components/sponsors-section/SponsorsSection';

const SponsorsPage = () => {
  return (
    <div className='sponsor-page'>
      <PageShape />
      <Header />
      <HeroSectionSM
        image='/images/header-bg/sponsor-bg.png'
        name='Sponsors'
        desc='About the Summit'
      />
      <div className='section-space-y'></div>
      <SponsorsSection />
      <Footer />
    </div>
  );
};

export default SponsorsPage;
