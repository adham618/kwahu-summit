import React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import NewsDetailSection5 from '@/components/news-detail-section/NewsDetailSection5';
import PageShape from '@/components/page-shape/PageShape';

const NewDetailPage5 = () => {
  return (
    <div className='news-detail-page'>
      <PageShape />
      <Header />
      <HeroSectionSM
        image='/images/header-bg/news-bg-5.png'
        name='Importance of regional and continental integration for Africa’s development'
      />
      <NewsDetailSection5 />
      <Footer />
    </div>
  );
};

export default NewDetailPage5;
