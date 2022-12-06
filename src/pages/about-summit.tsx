import React from 'react';

import About from '@/components/about/About';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import ObjectivesSection from '@/components/objectives-section/ObjectivesSection';
import PageShape from '@/components/page-shape/PageShape';
import VideoSection from '@/components/video/video-section';

const AboutSummitPage = () => {
  return (
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
  );
};

export default AboutSummitPage;
