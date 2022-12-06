import * as React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';
import SponsorsSection from '@/components/sponsors-section/SponsorsSection';

export default function SponsorsPage() {
  return (
    <Layout>
      <Seo templateTitle='Sponsors' />

      <main>
        <div className='sponsor-page'>
          <PageShape />
          <Header />
          <HeroSectionSM
            image='/images/header-bg/sponsor-bg.png'
            name='Sponsors'
            desc='About the Summit'
          />
          <div className='section-space-y'></div>
          <SponsorsSection />
          <Footer />
        </div>
      </main>
    </Layout>
  );
}
