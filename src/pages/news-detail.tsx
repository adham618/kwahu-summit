import React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import NewsDetailSection from '@/components/news-detail-section/NewsDetailSection';
import PageShape from '@/components/page-shape/PageShape';

const NewsDetailPage = () => {
  return (
    <div className='news-detail-page'>
      <PageShape />
      <Header />
      <HeroSectionSM
        image='/images/header-bg/news-detail-bg.png'
        name='Benefits of African Economic Integration'
      />
      <NewsDetailSection />
      <Footer />
    </div>
  );
};

export default NewsDetailPage;
