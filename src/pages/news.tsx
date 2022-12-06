import React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import NewsAll from '@/components/news-all/NewsAll';
import PageShape from '@/components/page-shape/PageShape';

const NewsPage = () => {
  return (
    <div className='news-page'>
      <PageShape />
      <Header />
      <HeroSectionSM
        image='/images/header-bg/news-bg.png'
        name='News'
        desc='News'
      />
      <NewsAll />
      <Footer />
    </div>
  );
};

export default NewsPage;
