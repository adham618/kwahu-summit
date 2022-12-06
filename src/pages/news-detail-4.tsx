import React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import NewsDetailSection4 from '@/components/news-detail-section/NewsDetailSection4';
import PageShape from '@/components/page-shape/PageShape';

const NewDetailPage4 = () => {
  return (
    <div className='news-detail-page'>
      <PageShape />
      <Header />
      <HeroSectionSM
        image='/images/header-bg/news-bg-4.png'
        name='Trading under AfCFTA to progress on agreed 87.7% tariff lines'
      />
      <NewsDetailSection4 />
      <Footer />
    </div>
  );
};

export default NewDetailPage4;
