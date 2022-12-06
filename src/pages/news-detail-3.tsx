import React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import NewsDetailSection3 from '@/components/news-detail-section/NewsDetailSection3';
import PageShape from '@/components/page-shape/PageShape';

const NewDetailPage3 = () => {
  return (
    <div className='news-detail-page'>
      <PageShape />
      <Header />
      <HeroSectionSM
        image='/images/header-bg/news-bg-3.png'
        name='Kwahu summit launched – Ghana to host Africa’s prosperity dialogues'
      />
      <NewsDetailSection3 />
      <Footer />
    </div>
  );
};

export default NewDetailPage3;
