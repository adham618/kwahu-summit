import * as React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import NewsDetailSection from '@/components/news-detail-section/NewsDetailSection';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function NewsDetailPage() {
  return (
    <Layout>
      <Seo templateTitle='Benefits of African Economic Integration' />

      <main>
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
      </main>
    </Layout>
  );
}
