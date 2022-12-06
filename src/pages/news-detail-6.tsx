import React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import NewsDetailSection6 from '@/components/news-detail-section/NewsDetailSection6';
import PageShape from '@/components/page-shape/PageShape';

const NewDetailPage6 = () => {
  return (
    <div className='news-detail-page'>
      <PageShape />
      <Header />
      <HeroSectionSM
        image='/images/header-bg/news-bg-6.png'
        name='AAAM, AfCFTA brainstorm on how to fast-track devt of African automobile sector'
      />
      <NewsDetailSection6 />
      <Footer />
    </div>
  );
};

export default NewDetailPage6;
