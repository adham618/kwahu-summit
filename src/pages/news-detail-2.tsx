import React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import NewsDetailSection2 from '@/components/news-detail-section/NewsDetailSection2';
import PageShape from '@/components/page-shape/PageShape';

const NewDetailPage2 = () => {
  return (
    <div className='news-detail-page'>
      <PageShape />
      <Header />
      <HeroSectionSM
        image='/images/header-bg/news-bg-2.png'
        name='“It’s time to move from mere negotiations to trading among ourselves” H.E. Joao Baptista Domingos Quiosa, '
      />
      <NewsDetailSection2 />
      <Footer />
    </div>
  );
};

export default NewDetailPage2;
