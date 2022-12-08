import * as React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import NewsDetailSection2 from '@/components/news-detail-section/NewsDetailSection2';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function NewsDetail2Page() {
  return (
    <Layout>
      <Seo templateTitle='News 1' />

      <main>
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
      </main>
    </Layout>
  );
}
