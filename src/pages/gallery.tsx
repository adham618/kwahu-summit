import React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import PageShape from '@/components/page-shape/PageShape';

const GalleryPage = () => {
  return (
    <div className='gallery-page'>
      <PageShape />
      <Header />
      <HeroSectionSM
        image='/images/header-bg/gallery-bg.png'
        name='Gallery'
        desc='Kwahu Summit Launch'
      />
      <Footer />
    </div>
  );
};

export default GalleryPage;
