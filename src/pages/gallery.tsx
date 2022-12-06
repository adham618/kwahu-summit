import React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function GalleryPage() {
  return (
    <Layout>
      <Seo templateTitle='Gallery' />

      <main>
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
      </main>
    </Layout>
  );
}
