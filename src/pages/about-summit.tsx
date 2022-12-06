import React from 'react';

import About from '@/components/about/About';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import ObjectivesSection from '@/components/objectives-section/ObjectivesSection';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';
import VideoSection from '@/components/video/video-section';

export default function AboutSummitPage() {
  return (
    <Layout>
      <Seo templateTitle='About-summit' />

      <main>
        <div className='about-summit-page'>
          <PageShape />
          <Header />
          <HeroSectionSM
            image='/images/header-bg/about-summit-bg.png'
            name='About the summit'
            desc='About the summit'
          />
          <About hasDot={false} />
          <VideoSection />
          <ObjectivesSection />
          <Footer />
        </div>
      </main>
    </Layout>
  );
}
